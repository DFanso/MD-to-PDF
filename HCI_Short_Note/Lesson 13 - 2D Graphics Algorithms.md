# Lesson 13 - 2D Graphics Algorithms

1. 2D Graphics Algorithms
   - Line Drawing Algorithms: DDA Algorithm, Midpoint Algorithm, Bresenham's Algorithm
   - Circle Drawing Algorithms: Midpoint Circle Algorithm
   - Antialiasing
   - Fill-Area Algorithms

2. Line Drawing
   - Fundamental to computer graphics, requiring fast and efficient functions
   - Rasterization Problem: Computing intermediate pixels to closely approximate the ideal line

3. Analytical Method for Line Drawing
   - Uses the equation of a line (y = mx + c) to compute points based on the previous point
   - Incremental algorithms assume the next pixel is on the next column (for small slopes) or row (for large slopes)

4. Digital Differential Analyzer (DDA) Algorithm
   - Incremental algorithm assuming slope is less than 1 (increment along x)
   - Given a point (x_k, y_k) on a line, the next point is given by x_k+1 = x_k + 1 and y_k+1 = y_k + m

5. Midpoint Algorithm
   - Incremental algorithm assuming slope is less than 1
   - Determines the next pixel based on the position of the midpoint between two candidate pixels
   - Decision criteria based on the sign of F(MP) = F(x_k + 1, y_k + ½)

6. Midpoint Circle Drawing Algorithm
   - Determines the closest pixel position to the specified circle path at each step
   - Calculates pixel positions around a circle path centered at the origin, then moves them to the proper screen position
   - Uses the circle function f_circle(x, y) = x^2 + y^2 - r^2 to determine if a point is inside, outside, or on the circle boundary

7. Antialiasing
   - Technique used to diminish jagged edges of an image or line by changing pixels around the edges to intermediate colors or grayscales
   - Can be enabled in OpenGL using the GL_LINE_SMOOTH option

8. Fill-Area Algorithms
   - Used to fill the interior of a polygonal shape by identifying interior points given the polygon boundary
   - Basic Filling Algorithm: Commonly used in interactive graphics packages, requiring a user-specified interior point
   - Types of Basic Filling Algorithms:
     - Boundary Fill Algorithm: For filling a region with a single boundary color
     - Flood Fill Algorithm: For filling a region with multiple boundary colors

