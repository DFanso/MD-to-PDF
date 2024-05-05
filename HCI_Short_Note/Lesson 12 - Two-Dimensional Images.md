# Lesson 12 - Two-Dimensional Images

1. Two Dimensional Images
   - Images in this class are two-dimensional shapes with X (horizontal) and Y (vertical) axes
   - The origin (0, 0) is typically located at the top-left or bottom-left corner

2. Hardware Pipeline
   - Input, Computation, and Output stages
   - Describing a rectangle to a computer using a model (object description that a computer understands)

3. Representing Objects
   - Most common method is the vertex method: define the object as a set of points (vertices) with connectivity information
   - Connectivity is important because it defines which vertices are connected via edges

4. Interactive Computer Graphics (ICG)
   - Provides two-way communication between the computer and the user
   - Three major components: Frame Buffer, T.V. Monitor, and Display Controller

5. Graphics Pipeline
   - A series of interconnected stages through which data and commands related to a scene go through during the rendering process
   - Transformation of view plane coordinates to physical device coordinates involves window-to-viewport transformation and logical screen coordinates to physical device coordinates transformation

6. Computation Stage
   - Transformations: converting the model to a form suitable for output
   - Rasterization: converting the transformed model into a framebuffer

7. Framebuffer
   - A block of memory dedicated to graphics output that holds the contents of what will be displayed
   - Consists of pixels (one element of the framebuffer)
   - The size of the framebuffer and the amount of memory allocated depends on the desired resolution and bit depth

8. Bit Depths and Memory
   - More bits per pixel allow for more colors to be stored at each pixel
   - Common bit depths: 16 bits (high color) and 32 bits (true color) per pixel
   - The amount of memory required depends on the resolution and bit depth (e.g., 640 x 480 x 32 bits = 1,228,800 bytes)

9. Dithering
   - Trading spatial resolution for intensity and color depth to increase the number of apparent colors
   - Works by relying on the human eye's tendency to blend areas of high frequency
   - Used when there are not enough bits to represent the desired number of colors

10. Output
    - Hardcopy: printers (dot matrix, inkjet, laser) and pen plotters
    - Display: vector and raster scan
    - The framebuffer contents are converted from digital to analog signals and sent to the monitor by the video card's RAMDAC

11. Raster vs. Vector Images
    - Raster images are compilations of individual colored pixels, with higher resolution allowing for larger resizing without blurriness or jagged edges
    - Vector images are best suited for projects requiring scalable graphics, such as printed projects and marketing images or logos, as they maintain crisp, clear lines when resized
