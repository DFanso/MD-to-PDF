# Lesson 17 - Image Processing Techniques

1\. Introduction
   - Image processing uses fragment shaders and rendering to textures
   - Works directly with pixels, typically involves multiple passes
   - Framebuffer: portion of RAM containing bitmap driving video display

2\. Edge Detection Filter
   - Identifies regions with significant brightness changes (edges)
   - Uses convolution filters (e.g., Sobel operator with 3x3 kernels)
   - Edge magnitude: g = sqrt(sx^2 + sy^2), compared to threshold

3\. Gaussian Blur Filter
   - Mixes pixel's color with nearby pixels using weighted sum
   - Uses 2D Gaussian function for weights
   - Decomposed into 1D horizontal and vertical passes for performance

4\. HDR Lighting
   - High Dynamic Range (HDR) rendering: larger dynamic range
   - Tone mapping compresses range using Tone Mapping Operator (TMO)
   - Local TMOs: use current and nearby pixels; Global TMOs: entire image
   - Log-average luminance used in simple global TMO
   - Color space conversions (RGB, CIE XYZ, CIE xyY) using matrices

5\. Bloom Effect
   - Bright parts bleed into darker areas, simulating airy disc effect
   - Implemented in five passes:
     1. Render scene to HDR texture
     2. Extract bright parts (bright-pass filter)
     3. Apply Gaussian blur to bright parts (two passes)
     4. Apply tone mapping
     5. Add tone-mapped result to blurred bright-pass results

6\. Useful Links
   - Additional resources on HDR, bloom, image processing, colorimetry, gamma correction
   - 