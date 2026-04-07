/* ═══════════════════════════════════════════════════
   Arm Motion Tracker — Browser Edition
   Uses MediaPipe Pose (JS) + HTML5 Canvas
   ═══════════════════════════════════════════════════ */

// ── State ──────────────────────────────────────────
let thickness = 5;
let alpha = 0.5;           // smoothing factor (EMA)
let selectedHand = 'right'; // which wrist to track
let viewMode = 'overlay';   // 'overlay' or 'black'

let smoothX = null, smoothY = null;
let prevX = null, prevY = null;
let prevTime = performance.now();

let pose = null;
let webcamStream = null;
let animFrameId = null;
let isRunning = false;

// FPS tracking
let frameCount = 0;
let fpsTime = performance.now();

// ── DOM References ─────────────────────────────────
const videoEl       = document.getElementById('webcam');
const videoCanvas   = document.getElementById('video-canvas');
const drawingCanvas = document.getElementById('drawing-canvas');
const landmarkCanvas= document.getElementById('landmark-canvas');
const canvasWrapper = document.getElementById('canvas-wrapper');
const startOverlay  = document.getElementById('start-overlay');
const statusBadge   = document.getElementById('status-badge');
const fpsDisplay    = document.getElementById('fps-display');
const toastEl       = document.getElementById('toast');
const colorLegend   = document.getElementById('color-legend');

const videoCtx    = videoCanvas.getContext('2d');
const drawCtx     = drawingCanvas.getContext('2d');
const landmarkCtx = landmarkCanvas.getContext('2d');

// ── MediaPipe Pose Setup ───────────────────────────
function initPose() {
  // The Pose constructor comes from the CDN-loaded @mediapipe/pose
  pose = new Pose({
    locateFile: (file) =>
      `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.5.1675469404/${file}`,
  });

  pose.setOptions({
    modelComplexity: 1,       // 0 = lite, 1 = full, 2 = heavy
    smoothLandmarks: true,    // built-in temporal smoothing
    enableSegmentation: false,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.7,
  });

  // Called every time MediaPipe finishes processing a frame
  pose.onResults(onPoseResults);
}

// ── Start Webcam ───────────────────────────────────
async function startWebcam() {
  try {
    webcamStream = await navigator.mediaDevices.getUserMedia({
      video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: 'user' },
      audio: false,
    });

    videoEl.srcObject = webcamStream;
    await videoEl.play();

    // Size canvases to match the actual video dimensions
    videoEl.addEventListener('loadedmetadata', () => {
      setCanvasSize(videoEl.videoWidth, videoEl.videoHeight);
    });

    // Wait a tick for metadata
    await new Promise(r => setTimeout(r, 200));
    setCanvasSize(videoEl.videoWidth || 640, videoEl.videoHeight || 480);

    // Init pose model (downloads weights on first call)
    initPose();

    // Show active state
    startOverlay.classList.add('hidden');
    statusBadge.textContent = 'Webcam On';
    statusBadge.className = 'badge badge-active';
    colorLegend.classList.add('visible');
    isRunning = true;

    // Start the render loop
    requestFrame();

    showToast('Webcam started — move your hand to draw!');
  } catch (err) {
    console.error('Webcam error:', err);
    showToast('⚠ Could not access webcam. Check permissions.');
  }
}

// ── Canvas sizing ──────────────────────────────────
function setCanvasSize(w, h) {
  [videoCanvas, drawingCanvas, landmarkCanvas].forEach(c => {
    c.width = w;
    c.height = h;
  });
  // Make the wrapper match aspect ratio
  canvasWrapper.style.width = '100%';
  canvasWrapper.style.maxWidth = w + 'px';
  canvasWrapper.style.aspectRatio = `${w} / ${h}`;
}

// ── Render Loop ────────────────────────────────────
async function requestFrame() {
  if (!isRunning) return;

  // Send current video frame to MediaPipe
  await pose.send({ image: videoEl });

  // FPS counter
  frameCount++;
  const now = performance.now();
  if (now - fpsTime >= 1000) {
    fpsDisplay.textContent = frameCount + ' FPS';
    frameCount = 0;
    fpsTime = now;
  }

  animFrameId = requestAnimationFrame(requestFrame);
}

// ── MediaPipe Results Callback ─────────────────────
function onPoseResults(results) {
  const w = videoCanvas.width;
  const h = videoCanvas.height;

  // ---- Draw webcam frame (bottom layer) ----
  videoCtx.save();
  videoCtx.clearRect(0, 0, w, h);

  if (viewMode === 'overlay') {
    // Mirror the video horizontally so it feels like a mirror
    videoCtx.translate(w, 0);
    videoCtx.scale(-1, 1);
    videoCtx.drawImage(results.image, 0, 0, w, h);
  } else {
    // Black background mode
    videoCtx.fillStyle = '#000';
    videoCtx.fillRect(0, 0, w, h);
  }
  videoCtx.restore();

  // ---- Draw skeleton landmarks (overlay) ----
  landmarkCtx.clearRect(0, 0, w, h);

  if (results.poseLandmarks) {
    const lm = results.poseLandmarks;

    // Pick the correct wrist landmark index
    // RIGHT_WRIST = 16, LEFT_WRIST = 15
    // Because the video is mirrored, "right" in real life maps to LEFT in the raw image.
    // MediaPipe pose landmark indices always refer to the person's own body parts.
    const wristIdx = selectedHand === 'right' ? 16 : 15;
    const elbowIdx = selectedHand === 'right' ? 14 : 13;
    const shoulderIdx = selectedHand === 'right' ? 12 : 11;

    // Draw the arm skeleton
    drawArmSkeleton(lm, shoulderIdx, elbowIdx, wristIdx, w, h);

    // ---- Wrist tracking & trail drawing ----
    const wrist = lm[wristIdx];
    if (wrist && wrist.visibility > 0.5) {
      // Mirror x coordinate to match the flipped video
      const rawX = viewMode === 'overlay' ? (1 - wrist.x) * w : wrist.x * w;
      const rawY = wrist.y * h;

      // EMA smoothing
      if (smoothX === null) {
        smoothX = rawX;
        smoothY = rawY;
      } else {
        smoothX = alpha * rawX + (1 - alpha) * smoothX;
        smoothY = alpha * rawY + (1 - alpha) * smoothY;
      }

      const currentTime = performance.now();
      const timeDiff = (currentTime - prevTime) / 1000; // seconds
      prevTime = currentTime;

      if (prevX !== null && prevY !== null) {
        // Calculate speed in pixels/second
        const dist = Math.hypot(smoothX - prevX, smoothY - prevY);
        const speed = timeDiff > 0 ? dist / timeDiff : 0;

        // Speed → color
        const color = speedToColor(speed);

        // Draw trail segment on the persistent drawing canvas
        drawCtx.strokeStyle = color;
        drawCtx.lineWidth = thickness;
        drawCtx.lineCap = 'round';
        drawCtx.lineJoin = 'round';
        drawCtx.beginPath();
        drawCtx.moveTo(prevX, prevY);
        drawCtx.lineTo(smoothX, smoothY);
        drawCtx.stroke();
      }

      prevX = smoothX;
      prevY = smoothY;
    } else {
      // Wrist not visible — lift the "pen"
      prevX = prevY = null;
    }
  } else {
    // No pose detected
    prevX = prevY = null;
  }
}

// ── Draw arm skeleton ──────────────────────────────
function drawArmSkeleton(lm, sIdx, eIdx, wIdx, w, h) {
  const points = [lm[sIdx], lm[eIdx], lm[wIdx]];

  // Convert to pixel coords (mirror x for overlay mode)
  const coords = points.map(p => ({
    x: viewMode === 'overlay' ? (1 - p.x) * w : p.x * w,
    y: p.y * h,
    v: p.visibility,
  }));

  // Only draw if all landmarks are sufficiently visible
  if (coords.some(c => c.v < 0.4)) return;

  // Lines connecting shoulder → elbow → wrist
  landmarkCtx.strokeStyle = 'rgba(139, 92, 246, 0.6)';
  landmarkCtx.lineWidth = 3;
  landmarkCtx.beginPath();
  landmarkCtx.moveTo(coords[0].x, coords[0].y);
  landmarkCtx.lineTo(coords[1].x, coords[1].y);
  landmarkCtx.lineTo(coords[2].x, coords[2].y);
  landmarkCtx.stroke();

  // Draw joint circles
  coords.forEach((c, i) => {
    landmarkCtx.beginPath();
    landmarkCtx.arc(c.x, c.y, i === 2 ? 10 : 7, 0, Math.PI * 2);
    landmarkCtx.fillStyle = i === 2 ? 'rgba(34, 211, 238, 0.9)' : 'rgba(139, 92, 246, 0.8)';
    landmarkCtx.fill();
    landmarkCtx.strokeStyle = '#fff';
    landmarkCtx.lineWidth = 2;
    landmarkCtx.stroke();
  });
}

// ── Speed → HSL Color ──────────────────────────────
function speedToColor(speed) {
  const maxSpeed = 2000;
  const t = Math.min(speed / maxSpeed, 1.0);

  // Map: slow(0) → blue(220°) → green(120°) → yellow(60°) → red(0°)
  const hue = 220 * (1 - t);
  const sat = 80 + 20 * t;   // more saturated when fast
  const light = 50 + 10 * t; // slightly brighter when fast

  return `hsl(${hue}, ${sat}%, ${light}%)`;
}

// ── UI Handlers ────────────────────────────────────
function changeThickness(delta) {
  thickness = Math.max(1, Math.min(30, thickness + delta));
  document.getElementById('thickness-value').textContent = thickness;
}

function updateSmoothing(val) {
  alpha = val / 100;
  document.getElementById('smoothing-value').textContent = alpha.toFixed(2);
}

function updateHand(val) {
  selectedHand = val;
  prevX = prevY = null;
  smoothX = smoothY = null;
  showToast(`Tracking ${val} hand`);
}

function updateView(val) {
  viewMode = val;
  showToast(val === 'overlay' ? 'Video overlay mode' : 'Black background mode');
}

function clearCanvas() {
  drawCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  prevX = prevY = null;
  smoothX = smoothY = null;
  showToast('Canvas cleared');
}

function saveDrawing() {
  // Create a temporary canvas to compose the final image
  const tmpCanvas = document.createElement('canvas');
  tmpCanvas.width = drawingCanvas.width;
  tmpCanvas.height = drawingCanvas.height;
  const tmpCtx = tmpCanvas.getContext('2d');

  // Draw a black background
  tmpCtx.fillStyle = '#000';
  tmpCtx.fillRect(0, 0, tmpCanvas.width, tmpCanvas.height);

  // Draw the trail on top
  tmpCtx.drawImage(drawingCanvas, 0, 0);

  // Trigger download
  const link = document.createElement('a');
  link.download = `arm_drawing_${Date.now()}.png`;
  link.href = tmpCanvas.toDataURL('image/png');
  link.click();

  showToast('Drawing saved!');
}

// ── Toast Notification ─────────────────────────────
let toastTimeout = null;
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.className = 'toast visible';
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.className = 'toast hidden';
  }, 2200);
}

// ── Keyboard Shortcuts ─────────────────────────────
document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  if (key === 'c') clearCanvas();
  else if (key === 's') { e.preventDefault(); saveDrawing(); }
  else if (key === '=' || key === '+') changeThickness(1);
  else if (key === '-') changeThickness(-1);
  else if (key === 'q') {
    // Stop everything
    isRunning = false;
    if (animFrameId) cancelAnimationFrame(animFrameId);
    if (webcamStream) webcamStream.getTracks().forEach(t => t.stop());
    statusBadge.textContent = 'Stopped';
    statusBadge.className = 'badge badge-inactive';
    showToast('Tracker stopped');
  }
});
