"""
Arm Motion Tracker using OpenCV and MediaPipe.

Installation:
-------------
Open your terminal or command prompt and run:
pip install opencv-python mediapipe numpy

Usage:
------
- Run the script: python arm_motion_tracker.py
- Move your right hand in front of the webcam to draw on the screen.
- Press 'c' to clear the drawing.
- Press 's' to save the current drawing as a PNG image.
- Press '+' or '=' to increase line thickness.
- Press '-' to decrease line thickness.
- Press 'q' to quit the application.
"""

import cv2
import mediapipe as mp
import numpy as np
import time
import math

def calculate_speed(pt1, pt2, time_diff):
    """Calculate the speed of the wrist movement based on distance over time."""
    if time_diff == 0:
        return 0
    # Calculate Euclidean distance between the two points
    distance = math.hypot(pt2[0] - pt1[0], pt2[1] - pt1[1])
    return distance / time_diff

def speed_to_color(speed):
    """
    Map speed to a BGR color. 
    Slow movement = Blue
    Medium movement = Green
    Fast movement = Red
    """
    # Max expected speed (pixels per second) - adjust based on your webcam's resolution and framerate
    max_speed = 2000.0
    normalized_speed = min(speed / max_speed, 1.0)
    
    # Hue values in OpenCV: 0 is Red, 60 is Green, 120 is Blue.
    # Low speed (0.0) -> Blue (120)
    # High speed (1.0) -> Red (0)
    hue = 120 * (1.0 - normalized_speed)
    
    # Create an image of 1x1 pixel in HSV to easily convert hue to BGR
    hsv_pixel = np.uint8([[[hue, 255, 255]]])
    bgr_pixel = cv2.cvtColor(hsv_pixel, cv2.COLOR_HSV2BGR)
    
    color = (int(bgr_pixel[0][0][0]), int(bgr_pixel[0][0][1]), int(bgr_pixel[0][0][2]))
    return color

def main():
    # Initialize MediaPipe Pose class. 
    # It detects key landmarks including shoulders, elbows, and wrists.
    mp_pose = mp.solutions.pose
    
    # Setup the Pose function for tracking.
    # min_tracking_confidence helps reduce jitter.
    pose = mp_pose.Pose(
        min_detection_confidence=0.5, 
        min_tracking_confidence=0.7
    )
    
    # Initialize VideoCapture object to read from the default webcam (0).
    cap = cv2.VideoCapture(0)
    
    if not cap.isOpened():
        print("Error: Could not open the webcam.")
        return

    # Create a canvas to draw the persistent trail on.
    # We initialize it as None and create it once we know the webcam frame size.
    canvas = None
    
    # Variables to track previous wrist position and time for line drawing and speed.
    prev_x, prev_y = None, None
    prev_time = time.time()
    
    # Smoothing parameters to reduce jitter
    # (0.0 to 1.0: lower means smoother but lags slightly behind the actual motion)
    alpha = 0.5 
    smooth_x, smooth_y = None, None

    # Default line thickness
    thickness = 5

    print("Starting webcam feed... Press 'q' to quit.")

    while True:
        # Read a frame from the webcam
        success, frame = cap.read()
        if not success:
            print("Ignoring empty camera frame.")
            break

        # Flip the frame horizontally for a mirror/selfie-view display
        frame = cv2.flip(frame, 1)
        
        # Initialize the persistent canvas identically to the camera frame's size
        if canvas is None:
            canvas = np.zeros_like(frame)

        # Convert the BGR image to RGB as MediaPipe requires RGB inputs.
        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        
        # Process the RGB frame to find pose landmarks
        frame_rgb.flags.writeable = False # Enhances performance
        results = pose.process(frame_rgb)
        frame_rgb.flags.writeable = True

        # Calculate time elapsed since the last frame
        current_time = time.time()
        time_diff = current_time - prev_time
        prev_time = current_time

        # If we successfully detect a pose
        if results.pose_landmarks:
            # Get the coordinates of the right wrist
            # (MediaPipe index 16 is RIGHT_WRIST, 15 is LEFT_WRIST)
            landmark = results.pose_landmarks.landmark[mp_pose.PoseLandmark.RIGHT_WRIST]
            
            # Check if the landmark is visible enough (not hidden behind the body)
            if landmark.visibility > 0.5:
                # Convert normalized coordinates [0.0, 1.0] to actual pixel coordinates
                h, w, c = frame.shape
                x, y = int(landmark.x * w), int(landmark.y * h)
                
                # Apply Exponential Moving Average (EMA) for smoothing
                if smooth_x is None or smooth_y is None:
                    smooth_x, smooth_y = x, y
                else:
                    smooth_x = int(alpha * x + (1 - alpha) * smooth_x)
                    smooth_y = int(alpha * y + (1 - alpha) * smooth_y)
                
                # If we have a previous point, we can draw a connecting line
                if prev_x is not None and prev_y is not None:
                    # Calculate wrist movement speed
                    speed = calculate_speed((prev_x, prev_y), (smooth_x, smooth_y), time_diff)
                    
                    # Determine color mapping based on speed
                    dynamic_color = speed_to_color(speed)
                    
                    # Draw a line on the persistent canvas
                    cv2.line(canvas, (prev_x, prev_y), (smooth_x, smooth_y), dynamic_color, thickness)
                
                # Update previous coordinates for the next frame
                prev_x, prev_y = smooth_x, smooth_y
            else:
                # Wrist is not visible, stop drawing temporarily
                prev_x, prev_y = None, None
        else:
            # No pose detected at all
            prev_x, prev_y = None, None

        # Overlay the canvas onto the video frame
        # First, create a mask of the drawn areas (non-black pixels in canvas)
        gray_canvas = cv2.cvtColor(canvas, cv2.COLOR_BGR2GRAY)
        _, mask = cv2.threshold(gray_canvas, 1, 255, cv2.THRESH_BINARY)
        mask_inv = cv2.bitwise_not(mask)
        
        # Black-out the drawn area in the original webcam frame
        frame_bg = cv2.bitwise_and(frame, frame, mask=mask_inv)
        
        # Take only the drawn marks from the canvas
        canvas_fg = cv2.bitwise_and(canvas, canvas, mask=mask)
        
        # Combine the backgrounds and foregrounds
        output_frame = cv2.add(frame_bg, canvas_fg)
        
        # Draw the on-screen Heads-Up Display (HUD)
        cv2.putText(output_frame, "Right Wrist Tracker", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
        cv2.putText(output_frame, "'c'-clear | 'q'-quit | 's'-save", (10, 60), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (200, 200, 200), 1)
        cv2.putText(output_frame, f"Thickness: {thickness} (+/- to change)", (10, 90), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (200, 200, 200), 1)

        # Display the final composite frame
        cv2.imshow('Arm Motion Tracker', output_frame)
        
        # Keyboard Event Handling
        key = cv2.waitKey(1) & 0xFF
        if key == ord('q'):
            # Quit
            break
        elif key == ord('c'):
            # Clear canvas
            canvas = np.zeros_like(frame)
            prev_x, prev_y = None, None
        elif key == ord('s'):
            # Save drawing
            filename = f"drawing_{int(time.time())}.png"
            cv2.imwrite(filename, canvas)
            print(f"Saved clear drawing to {filename}")
            
            # Briefly indicate save success on screen
            cv2.putText(output_frame, "SAVED!", (10, 130), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
            cv2.imshow('Arm Motion Tracker', output_frame)
            cv2.waitKey(500)
        elif key == ord('=') or key == ord('+'):
            # Increase line thickness
            thickness = min(30, thickness + 1)
        elif key == ord('-'):
            # Decrease line thickness
            thickness = max(1, thickness - 1)

    # Release webcam and destroy all display windows
    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
