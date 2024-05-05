# Lesson 10 - OpenGL Introduction

1. Introduction to Computer Graphics
   - Creation and manipulation of graphic images by means of a computer
   - Started as a technique to enhance the display of information generated by a computer
   - Major areas: modeling, rendering, animation, user interaction, virtual reality, visualization, image processing, 3D scanning, computational photography

2. Overview of Graphics Systems
   - Images: two-dimensional shapes with X and Y axes
   - Hardware: input, computation, and output stages
   - Representing objects: vertex method (define objects as a set of points with connectivity information)
   - Interactive computer graphics (ICG): provides two-way communication between the computer and the user

3. Graphics Pipeline
   - Series of interconnected stages through which data and commands related to a scene go through during the rendering process
   - Stages: world coordinate system, projection onto a view plane, clipping planes, window to viewport transformation, logical screen coordinates to physical device coordinates

4. Input Devices
   - Locator devices: mouse, trackball, joystick, tablet, virtual reality trackers, data gloves, digitizers
   - Keyboard: text input, list boxes, GUI, CAD/CAM, modeling
   - Scanners: image scanners (flatbed), laser scanners (Deltasphere), camera-based scanners
   - Other devices: light pens, voice systems, touch panels, camera/vision-based

5. Computation Stage
   - Transformations: converting the model to a form suitable for output
   - Rasterization: converting the transformed model into a framebuffer
   - Framebuffer: a block of memory dedicated to graphics output that holds the contents of what will be displayed
   - Bit depth: number of bits allocated per pixel in a buffer (e.g., 16 bits, 32 bits)
   - Dithering: trading spatial resolution for intensity and color depth to increase the number of apparent colors

6. Output Devices
   - Hardcopy: printers (dot matrix, inkjet, laser) and pen plotters
   - Display: vector and raster scan
   - Cathode Ray Tubes (CRTs): electron gun firing at a phosphor-coated screen
   - Liquid Crystal Displays (LCDs): cells that either allow light to flow through or block it
   - Projection Displays: use bright CRT or LCD screens to generate an image sent through an optical system to focus on a large screen
   - Displays in Virtual Reality: head-mounted displays (HMDs) and head-tracked displays (HTDs)

7. Graphics Software
   - Special-purpose software: Excel, AutoCAD, medical visualization
   - Programming API: provides a way to communicate with the hardware