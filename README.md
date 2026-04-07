# CADDYBOX

A browser-based 3D model viewer with smooth touch and mouse controls. Features pinch-to-zoom, drag-to-rotate, and scroll wheel zoom for an intuitive viewing experience.

## Features

- **Touch Controls**:
  - Pinch with two fingers to zoom in/out
  - Drag with one finger to rotate the model
- **Mouse Controls**:
  - Drag to rotate the camera around the model
  - Scroll wheel to zoom in/out
- **Responsive Design** - Works on desktop and mobile devices
- **Transparent Background** - Model appears to float in space
- **Smooth Animations** - Fluid camera movements and interactions

## Controls

### Desktop
- **Mouse Drag**: Rotate camera around model
- **Scroll Wheel**: Zoom in/out

### Mobile/Touch
- **One Finger Drag**: Rotate camera around model
- **Two Finger Pinch**: Zoom in/out

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Place your GLB model file in the root directory (currently loads `caddybox.glb`)
4. Run development server: `npm run dev`
5. Open http://localhost:5173 in your browser

## Building for Production

```bash
npm run build
npm run preview
```

## Technologies Used

- **Three.js** - 3D rendering and GLTF model loading
- **TypeScript** - Type-safe development
- **Vite** - Fast development and building
- **Interactive Objects** - Poke, grab, and rotate your balloon creations
- **Draggable Camera Preview** - See your hand tracking skeleton and move it anywhere
- **Mouse/Touch Controls** - Orbit and zoom the 3D scene

## How It Works

1. **Draw** - Extend your index finger (keep other fingers curled) to draw
2. **Complete Shape** - Hold an open palm for 0.5 seconds to close and inflate your drawing
3. **Interact** - Pinch to grab and move objects, poke with your finger to squish them
4. **Clear** - Click the "Clear All" button to remove all objects

## Gesture Controls

| Gesture | Action |
|---------|--------|
| Point (index finger) | Draw in the air |
| Open Palm (hold) | Close shape and inflate to 3D |
| Pinch | Grab and move objects |
| Swipe | Remove individual object |

## UI Controls

| Control | Action |
|---------|--------|
| Clear All button | Remove all objects |
| Color swatches | Change drawing color |
| Camera preview | Drag to move, double-click to reset |
| Expand button (on preview) | Toggle larger preview |

## Installation

```bash
# Clone the repository
git clone https://github.com/janusdesigns/air-canvas.git
cd air-canvas

# Install dependencies
npm install

# Start development server
npm run dev
```

Then open your browser to the local URL shown in the terminal (usually `http://localhost:5173`).

## Requirements

- Modern browser with WebGL support (Chrome, Firefox, Edge, Safari)
- Webcam access
- Good lighting for hand tracking
- HTTPS connection (required for camera access when hosted online)

## Tech Stack

- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Three.js** - 3D rendering and scene management
- **MediaPipe Hands** - Real-time hand tracking
- **GSAP** - Smooth animations

## Mouse/Touch Controls

- **Click + Drag** on empty space to orbit the camera
- **Click + Drag** on an object to rotate it
- **Scroll wheel** to zoom in/out
- **Touch** gestures supported on mobile

## Project Structure

```
src/
├── main.ts           # Application entry point
├── handTracking.ts   # MediaPipe hand detection
├── gestureDetector.ts # Gesture recognition logic
├── drawingCanvas.ts  # 2D stroke rendering
├── scene3D.ts        # Three.js scene setup
├── objectManager.ts  # 3D balloon creation and physics
├── balloonInflator.ts # 3D mesh generation from strokes
├── handVisualizer.ts # Hand skeleton overlay
├── multiplayer.ts    # PeerJS multiplayer support
├── constants.ts      # Configuration values
└── types.ts          # TypeScript interfaces
```

## Tips for Best Results

- Use good lighting so your hand is clearly visible
- Keep your hand about 1-2 feet from the camera
- Point with just your index finger extended for drawing
- Draw slowly and steadily for smoother lines

## Feedback & Contributions

Found a bug? Have an idea? I'd love to hear from you!

- Open an issue on GitHub
- Fork and submit a pull request
- Share your own version built on this project

## Credits

Designed by [Janus Tiu](https://www.instagram.com/janustiu/)

### Open Source Libraries

This project is built with these amazing open source libraries:

| Library | Description | License |
|---------|-------------|---------|
| [Three.js](https://threejs.org/) | 3D graphics library for WebGL rendering | MIT |
| [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html) | Google's real-time hand tracking solution | Apache 2.0 |
| [GSAP](https://greensock.com/gsap/) | Professional-grade animation library | GreenSock License |
| [PeerJS](https://peerjs.com/) | WebRTC peer-to-peer connections made easy | MIT |
| [Vite](https://vitejs.dev/) | Next-generation frontend build tool | MIT |
| [TypeScript](https://www.typescriptlang.org/) | Typed superset of JavaScript | Apache 2.0 |

Thank you to all the maintainers and contributors of these projects!

## License

MIT
