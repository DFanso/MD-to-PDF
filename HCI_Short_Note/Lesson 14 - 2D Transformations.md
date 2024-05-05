# Lesson 14 - 2D Transformations

1. 2D Transformations
   - Allow viewing objects from different angles, enlarging or reducing the scale or shape
   - Each transformation is a single entity, denoted by a unique name or symbol
   - Transformations can be combined through concatenation

2. Types of 2D Transformations
   - Rigid Body Transformations: do not change the object's shape
     - Translate: repositioning an object along a straight-line path
     - Scale: altering the size of an object about a fixed point
     - Rotate: repositioning an object along a circular path, requiring an angle and a pivot point

3. Representing Transformations
   - Vertices represented as (x, y) or as a matrix/vector
   - Transformations can be represented using matrices
   - Translation: P' = P + T, where T is the translation matrix
   - Scaling: P' = S * P, where S is the scaling matrix
   - Rotation: P' = R(θ) * P, where R(θ) is the rotation matrix

4. Combining Transformations
   - Transformations can be combined by multiplying their matrices
   - The order of transformations matters, as matrix multiplication is not commutative

5. Homogeneous Coordinates
   - Increase the dimensionality of the problem to transform the addition component of translation into multiplication
   - By expressing transformations with homogeneous equations and coordinates, all transformations can be expressed as matrix multiplications

6. Coordinate Systems
   - Object Coordinates: local coordinate system for each object
   - World Coordinates: global coordinate system
   - Screen Coordinates: coordinate system of the display device
   - Transformations can be applied hierarchically to convert between coordinate systems

7. 3D Geometry
   - Three-dimensional system with x, y, and z axes
   - Right-handed and left-handed coordinate systems

8. 3D Transformations
   - Translation: movement of an object from one position to another using translation vectors (Tx, Ty, Tz)
   - Scaling: changing the size of an object using scaling factors (Sx, Sy, Sz)
     - Uniform scaling: all scaling factors are equal
     - Differential scaling: scaling factors are different
   - Rotation: moving an object about an angle and an axis (x, y, or z)
     - Rotation matrices for each axis: Rx(θ), Ry(θ), Rz(θ)

