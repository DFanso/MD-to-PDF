# Lesson 15 - Image Processing Techniques

1. Simplified Graphics Pipeline
   - Vertex shader takes input variables and outputs variables to the fragment shader
   - Fragment shader takes input variables and outputs variables to the frame buffer
   - Vertex attributes, uniform variables, and interpolation connect the shaders

2. Vectors
   - Magnitude: length of a vector, calculated using the Pythagorean theorem (√(x² + y²))
   - Normalizing: creating a unit vector with a magnitude of 1, done by dividing the vector by its magnitude
   - Dot product: multiplication of two vectors resulting in a scalar, a ∙ b = |a| ∙ |b| ∙ cos(θ)
   - Cross product: multiplication of two vectors resulting in a third vector perpendicular to the original vectors, a x b = |a| * |b| * sin(θ) * n

3. Shading Models and Components
   - Ambient: represents light that illuminates all surfaces equally and reflects equally in all directions
     - Ia = Ka ∙ La, where Ka is surface reflectivity and La is light source intensity
   - Diffuse: models a surface that exhibits purely diffuse reflection (scatters light in all directions equally)
     - L = Kd ∙ Ld ∙ (s ∙ n ∙ cosθ), where Kd is diffuse reflectivity, Ld is light source intensity, and s.n is the dot product between the light direction and normal vector
   - Specular: models the shininess of the surface and represents glossy reflection around a preferred direction
     - Is = Ks ∙ Ls ∙ (𝑟. 𝑣)^𝑓, where Ks is specular reflectivity, Ls is light intensity, r is the reflection vector, v is the viewing vector, and f is the power coefficient

4. Phong Reflection Model
   - Combines ambient, diffuse, and specular components
   - I = Ia + Id + Is = Ka . La + Kd . Ld . (s.n) + Ks ∙ Ls ∙ (𝑟. 𝑣)^𝑓

5. Per-vertex vs. Per-fragment Shading
   - Per-vertex (Gouraud) shading: calculations done within the vertex shader, can lead to warped or lost specular highlights
   - Per-fragment shading: calculations applied to every pixel, more realistic but more expensive

6. Attenuation and Directional Light
   - Attenuation: modeling the fall-off of light intensity with distance, done by dividing the light intensity by the inverse square of the distance or using a less steep curve
   - Directional light: has only direction, no position, avoiding the need to calculate light direction in the shader

7. Useful Resources
   - Coordinate systems, transformations, GLSL basics, and linear algebra tutorials are provided as additional learning resources

