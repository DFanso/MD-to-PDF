# Lesson 11 - Shaders

1. Introduction to OpenGL
   - OpenGL is a cross-platform graphics API developed by the Khronos Group
   - Set of specifications implemented by graphics card manufacturers
   - Users should keep their graphics drivers updated

2. OpenGL Core vs. Compatibility
   - Old OpenGL (fixed function pipeline): less control, most things hidden from the programmer, inefficient
   - New OpenGL (version 3.3 or higher): split into Core (modern version with more flexibility and control) and Compatibility (to maintain legacy)

3. OpenGL State Machine
   - OpenGL is a large state machine with a collection of variables defining how it should operate
   - Context: the state of OpenGL, changed by state-changing functions
   - Objects: a collection of objects representing a subset of OpenGL's state
   - State-using functions: perform operations based on the current state of OpenGL

4. Drawing Primitives in OpenGL
   - GL_POINTS, GL_LINES, GL_LINE_STRIP, GL_LINE_LOOP
   - GL_TRIANGLES, GL_TRIANGLE_STRIP, GL_TRIANGLE_FAN

5. OpenGL Shading Language (GLSL)
   - GLSL is a mini-program, also known as a shader program
   - Enables the programmer to harness the power of the Graphics Processing Unit (GPU)
   - Fundamental and integral to OpenGL

6. GLSL Common Data Types
   - Built-in Simple Types: float, double, bool, int, uint
   - Vectors: vec2, vec3, vec4 (floats); dvec2, dvec3, dvec4 (doubles); bvec2, bvec3, bvec4 (bools); ivec2, ivec3, ivec4 (ints); uvec2, uvec3, uvec4 (unsigned ints)
   - Square Matrices: mat2, mat3, mat4 (floats); dmat2, dmat3, dmat4 (doubles)
   - Non-Square Matrices: mat(2,3,4) x (2,3,4) (floats and doubles)

7. Simplified Graphics Pipeline
   - Transformation Process: transforming coordinates from 3D to 2D (CPU, Vertex Shader, Primitive Assembly, Geometry Shader, Rasterization, clipping)
   - Coloring Process: applying color and presenting on the screen (Fragment Shader, Tests and Blending, Display)

8. Useful Definitions
   - Vertex: a collection of data per 3D coordinate
   - Vertex Data: a collection of vertices
   - Vertex Attributes: vertex position, vertex color, etc.
   - Uniforms: global variables seen by all shaders, coming directly from the CPU
   - layout (location = 0): specifies the vertex attribute location
   - Vertex Shader: transforms 3D coordinates and allows basic processing on vertex attributes
   - Fragment Shader: calculates the final color of a pixel, where most advanced OpenGL effects occur

9. Useful Links for Learning JOGL (Java OpenGL)
   - https://jogamp.org/wiki/index.php/Jogl_Tutorial
   - https://www.tutorialspoint.com/jogl/index.htm
   - https://www.javatpoint.com/jogl-introduction
