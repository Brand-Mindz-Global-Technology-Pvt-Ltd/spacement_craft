import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

// ==================================================================
// Texture paths - Make sure your files are in the /public folder
// ==================================================================
const earthDayMapUrl = "/1_earth_8k.jpg";         // Main day texture
const earthBumpMapUrl = "/earth-bump-map.png";     // The new B&W bump map
const earthSpecularMapUrl = "/earth-specular-map.jpg"; // The new blue/black specular map
const earthNightMapUrl = "/earth-nightmap.jpg";    // Night lights texture
const earthCloudsMapUrl = "/earth-clouds.jpg";     // Clouds texture

// ==================================================================
// ATMOSPHERE COMPONENT
// Creates the atmospheric glow effect.
// ==================================================================
const Atmosphere = () => {
  return (
    <mesh scale={[1.05, 1.05, 1.05]}>
      <sphereGeometry args={[2.5, 64, 64]} />
      {/* 
        Using a standard material with additive blending gives a more
        realistic "glow" than the basic material from before.
      */}
      <meshStandardMaterial
        color="#00aaff"
        transparent={true}
        opacity={0.1}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending} // Key for the glow effect
        depthWrite={false}
      />
    </mesh>
  );
};

// ==================================================================
// CLOUDS COMPONENT
// Renders the cloud layer with parallax rotation.
// ==================================================================
const Clouds = () => {
  const cloudsRef = useRef<THREE.Mesh>(null!);
  const cloudsMap = useLoader(THREE.TextureLoader, earthCloudsMapUrl);

  useFrame(() => {
    if (cloudsRef.current) {
      // Rotate clouds slightly faster than the Earth
      cloudsRef.current.rotation.y += 0.0006;
    }
  });

  return (
    <mesh ref={cloudsRef} scale={[1.01, 1.01, 1.01]}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial
        alphaMap={cloudsMap}
        transparent={true}
        opacity={0.35}
      />
    </mesh>
  );
};

// ==================================================================
// EARTH COMPONENT
// This is where the magic happens with all the PBR textures.
// ==================================================================
const Earth = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  // Load all the textures needed for the PBR material
  const [colorMap, bumpMap, roughnessMap, nightMap] = useLoader(THREE.TextureLoader, [
    earthDayMapUrl,
    earthBumpMapUrl,
    earthSpecularMapUrl,
    earthNightMapUrl,
  ]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.00001; // Earth's rotation
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial
        // --- Base Color & Surface Detail ---
        map={colorMap}
        bumpMap={bumpMap}
        bumpScale={0.05} // Controls the intensity of the mountains/valleys

        // --- Reflections ---
        // Use the specular map as a roughness map.
        // Black areas (land) on the map will be rough (less reflective).
        // White/blue areas (water) will be smooth (more reflective).
        roughnessMap={roughnessMap}
        metalness={0.1} // Earth is not very metallic

        // --- Night Lights ---
        emissiveMap={nightMap}
        emissive={new THREE.Color("#ffffbb")} // A warm, yellowish light color
        emissiveIntensity={1.5} // How bright the lights are
      />
    </mesh>
  );
};

// ==================================================================
// MAIN CANVAS COMPONENT
// Assembles the scene, lighting, and controls.
// ==================================================================
const EarthCanvas = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 1, 7], fov: 50 }}>
        <Suspense fallback={null}>
          {/* --- Cinematic Lighting Setup --- */}
          {/* A soft ambient light to slightly illuminate the dark side */}
          <ambientLight intensity={0.1} />
          {/* A strong directional light to simulate the Sun */}
          <directionalLight
            position={[5, 5,4]} // Positioned to create a crescent effect
            intensity={2.5}
            color="#ffffff"
          />

       

          {/* --- Earth System --- */}
          <group position={[0, 0, 0]}>
            <Earth />
            {/* <Clouds /> */}
            {/* <Atmosphere /> */}
          </group>

          {/* --- Controls --- */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;