import { Scene3D } from './scene3D';

class CADDYBOX {
  // Core component
  private scene3D: Scene3D;

  // DOM elements
  private loadingOverlay: HTMLElement;
  private statusMessage: HTMLElement;

  // Mouse controls state
  private isDragging = false;
  private lastMouseX = 0;
  private lastMouseY = 0;

  // Touch controls state
  private initialPinchDistance = 0;
  private lastPinchDistance = 0;

  constructor() {
    try {
      // Get DOM elements
      const sceneCanvas = document.getElementById('scene-canvas') as HTMLCanvasElement;

      // Validate required elements exist
      if (!sceneCanvas) {
        throw new Error('Missing required DOM element: scene-canvas');
      }

      this.loadingOverlay = document.getElementById('loading-overlay')!;
      this.statusMessage = document.getElementById('status-message')!;
      if (!this.loadingOverlay || !this.statusMessage) {
        throw new Error('Missing loading overlay or status message element');
      }

      // Initialize components
      console.log('Initializing components...');
      this.scene3D = new Scene3D(sceneCanvas);
      console.log('Scene3D created');

      // Set initial size
      this.resize();

      // Setup event listeners
      this.setupEventListeners();

      console.log('All setup complete, starting initialization...');

      // Start the application
      this.init().catch(error => {
        console.error('Initialization failed with error:', error);
      });
    } catch (error) {
      console.error('Constructor failed:', error);
      const loadingOverlay = document.getElementById('loading-overlay');
      if (loadingOverlay) {
        loadingOverlay.classList.add('hidden');
      }
      const statusMessage = document.getElementById('status-message');
      if (statusMessage) {
        statusMessage.textContent = `Setup failed: ${error instanceof Error ? error.message : 'Unknown error'}`;
        statusMessage.classList.add('visible');
      }
      throw error;
    }
  }

  private setupEventListeners(): void {
    // Window resize
    window.addEventListener('resize', () => this.resize());

    // Mouse controls for 3D scene
    const sceneCanvas = document.getElementById('scene-canvas')!;

    sceneCanvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
    sceneCanvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
    sceneCanvas.addEventListener('mouseup', () => this.onMouseUp());
    sceneCanvas.addEventListener('mouseleave', () => this.onMouseUp());
    sceneCanvas.addEventListener('wheel', (e) => this.onWheel(e));

    // Touch support
    sceneCanvas.addEventListener('touchstart', (e) => this.onTouchStart(e));
    sceneCanvas.addEventListener('touchmove', (e) => this.onTouchMove(e));
    sceneCanvas.addEventListener('touchend', () => this.onMouseUp());
  }

  private onMouseDown(e: MouseEvent): void {
    this.isDragging = true;
    this.lastMouseX = e.clientX;
    this.lastMouseY = e.clientY;
  }

  private onMouseMove(e: MouseEvent): void {
    if (!this.isDragging) return;

    const deltaX = e.clientX - this.lastMouseX;
    const deltaY = e.clientY - this.lastMouseY;

    // Orbit the camera
    this.scene3D.orbitCamera(deltaX * 0.005, deltaY * 0.005);

    this.lastMouseX = e.clientX;
    this.lastMouseY = e.clientY;
  }

  private onMouseUp(): void {
    this.isDragging = false;
    this.initialPinchDistance = 0;
    this.lastPinchDistance = 0;
  }

  private onWheel(e: WheelEvent): void {
    e.preventDefault();
    this.scene3D.zoomCamera(e.deltaY * 0.001);
  }

  private getPinchDistance(touch1: Touch, touch2: Touch): number {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  private onTouchStart(e: TouchEvent): void {
    if (e.touches.length === 1) {
      // Single touch - start dragging
      this.isDragging = true;
      this.lastMouseX = e.touches[0].clientX;
      this.lastMouseY = e.touches[0].clientY;
    } else if (e.touches.length === 2) {
      // Two touches - start pinch
      this.isDragging = false; // Disable dragging during pinch
      this.initialPinchDistance = this.getPinchDistance(e.touches[0], e.touches[1]);
      this.lastPinchDistance = this.initialPinchDistance;
    }
  }

  private onTouchMove(e: TouchEvent): void {
    if (e.touches.length === 1 && this.isDragging) {
      // Single touch drag - rotate camera
      const deltaX = e.touches[0].clientX - this.lastMouseX;
      const deltaY = e.touches[0].clientY - this.lastMouseY;

      this.scene3D.orbitCamera(deltaX * 0.005, deltaY * 0.005);

      this.lastMouseX = e.touches[0].clientX;
      this.lastMouseY = e.touches[0].clientY;
    } else if (e.touches.length === 2) {
      // Two touches - pinch to zoom
      const currentDistance = this.getPinchDistance(e.touches[0], e.touches[1]);
      const deltaDistance = currentDistance - this.lastPinchDistance;
      
      if (Math.abs(deltaDistance) > 1) {
        this.scene3D.zoomCamera(-deltaDistance * 0.01);
        this.lastPinchDistance = currentDistance;
      }
    }
  }

  private resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.scene3D.resize(width, height);
  }

  private async init(): Promise<void> {
    try {
      console.log('Starting initialization...');
      
      // Load the 3D model from a path relative to this module
      const modelUrl = new URL('../caddybox.glb', import.meta.url).href;
      console.log('Loading 3D model from', modelUrl);
      await this.scene3D.loadModel(modelUrl);
      console.log('Model loaded successfully');

      // Hide loading overlay
      console.log('Hiding loading overlay...');
      this.loadingOverlay.classList.add('hidden');

      // Start animation loop
      console.log('Starting animation loop...');
      this.animate();
      console.log('Initialization complete!');
    } catch (error) {
      console.error('Failed to initialize:', error);
      this.loadingOverlay.classList.add('hidden');
      this.showStatus('Could not load the CADDYBOX model. Please refresh the page.', 0);
    }
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());

    // Render 3D scene
    this.scene3D.render();
  }

  private showStatus(message: string, duration?: number): void {
    this.statusMessage.textContent = message;
    this.statusMessage.classList.add('visible');

    if (duration) {
      setTimeout(() => this.hideStatus(), duration);
    }
  }

  private hideStatus(): void {
    this.statusMessage.classList.remove('visible');
  }
}

// Start the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  try {
    new CADDYBOX();
  } catch (error) {
    console.error('Failed to create CADDYBOX:', error);
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
      loadingOverlay.classList.add('hidden');
    }
    const statusMessage = document.getElementById('status-message');
    if (statusMessage) {
      statusMessage.textContent = 'Error initializing application. Check console for details.';
      statusMessage.classList.add('visible');
    }
  }
});

// Add global unhandled rejection handler
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled promise rejection:', event.reason);
  const loadingOverlay = document.getElementById('loading-overlay');
  if (loadingOverlay) {
    loadingOverlay.classList.add('hidden');
  }
});
