# Lesson 16 - Lighting and Shading

1. Main Types of Lights
   - Directional: similar to sunlight, only light direction matters, position is irrelevant
   - Point: behaves like a light bulb, has a limited range, position is crucial for calculating light direction
   - Spotlight: similar to a real spotlight, position and orientation are important

2. Directional Light
   - Light rays are parallel, intensity stays constant, no fall-off
   - Light direction can be sent directly as a uniform to avoid calculations in the shader
   - Use separate shaders for directional and point lights to take advantage of parallel processing on the GPU

3. Point Light
   - Uses the Phong reflection model: I = Ia + Id + Is
   - Ambient (Ia), Diffuse (Id), and Specular (Is) components are calculated and summed

4. Multiple Point Lights
   - Evaluate the reflection model for each light and sum the results to determine total light intensity
   - Use uniform arrays to store position and intensity of each light
   - Optimize code by using one light intensity for diffuse and specular components

5. Per-Fragment Shading (Phong Shading or Phong Interpolation)
   - Improves the look by doing all calculations in the fragment shader
   - Interpolates position and normal vector, calculates color for each fragment
   - More expensive than per-vertex shading (Gouraud shading) but provides better results, especially for specular highlights

6. Blinn-Phong Reflection Model
   - Calculates a half vector (h) instead of the reflection vector (r)
   - Replaces the dot product of r and v with the dot product of h and n
   - More efficient than the original Phong model

7. Spotlight
   - Light radiates within a cone with the apex located at the light source
   - Light is maximal along the axis of the cone and decreases toward the outside edges
   - Creates similar visual effects to a real spotlight

8. Toon Shading (Cel Shading)
   - Non-photorealistic rendering technique that mimics the style of hand-drawn animation
   - Large areas of constant color with sharp transitions between them
   - Locks the value of the dot product calculated for diffuse to a fixed number of possible values

9. Fog Simulation
   - Achieved by mixing the color of each fragment with a constant fog color
   - Amount of "fog color" applied is determined by the distance from the camera
   - Linear or non-linear interpolation can be used
   - Fog factor (f) is calculated using the formula: f = (dmax - |z|) / (dmax - dmin)
