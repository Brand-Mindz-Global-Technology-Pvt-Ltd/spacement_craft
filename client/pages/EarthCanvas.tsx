// src/components/EarthCanvas.tsx

import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// ==================================================================
// SHADER FOR THE SOFT, BLENDED ATMOSPHERE EFFECT
// This creates the soft, cinematic glow seen in the reference image.
// ==================================================================
const atmosphereVertexShader = `
  varying vec3 vNormal;
  varying vec2 vUv;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const atmosphereFragmentShader = `
  uniform sampler2D earthTexture;
  varying vec3 vNormal;
  varying vec2 vUv;

  void main() {
    // A higher bias (0.6) creates a wider glow.
    // A low exponent (2.0) creates a soft, gradual falloff.
    // This combination creates the soft border effect you requested.
    float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);

    // The base color of the atmosphere.
    vec3 atmosphereColor = vec3(0.3, 0.6, 1.0);

    // Sample the color from the Earth texture.
    vec3 earthColor = texture2D(earthTexture, vUv).rgb;

    // Mix the Earth's color with the atmosphere's color based on the intensity.
    // The final color is also multiplied by the intensity to create the glow effect.
    gl_FragColor = vec4(mix(earthColor, atmosphereColor, intensity), 1.0) * intensity;
  }
`;

// --- Atmosphere Component ---
const Atmosphere = () => {
  const atmosphereRef = useRef<THREE.Mesh>(null!);
  // Load the Earth's texture. This will be passed to the shader.
  const [earthTexture] = useLoader(THREE.TextureLoader, [
    "/1_earth_8k.jpg",
  ]);

  useFrame(() => {
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={atmosphereRef} scale={[2.7, 2.7, 2.7]}>
      <sphereGeometry args={[1, 32, 32]} />
      <shaderMaterial
        vertexShader={atmosphereVertexShader}
        fragmentShader={atmosphereFragmentShader}
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
        uniforms={{
          earthTexture: { value: earthTexture },
        }}
      />
    </mesh>
  );
};


// ==================================================================
// BALANCED CLOUDS COMPONENT
// Creates the subtle, wispy "light color of the white phrase" effect.
// ==================================================================
const Clouds = () => {
  const cloudsRef = useRef<THREE.Mesh>(null!);
  const cloudsAlphaMap = useLoader(THREE.TextureLoader, "/earth-clouds.jpg");
  useFrame(() => { if (cloudsRef.current) { cloudsRef.current.rotation.y += 0.0022; } });
  return (
    <mesh ref={cloudsRef}>
      <sphereGeometry args={[2.52, 32, 32]} />
      <meshStandardMaterial
        alphaMap={cloudsAlphaMap}
        transparent={true}
        // Pure white color with very low opacity makes the clouds wispy and realistic.
        color="white"
        opacity={0.15}
      />
    </mesh>
  );
};

// ==================================================================
// DEFINITIVE PHOTOREALISTIC EARTH COMPONENT
// Uses all textures for maximum realism.
// ==================================================================
const Earth = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  // Load all five textures required for the complete effect.
  const [colorMap, nightMap, metalnessMap, normalMap, bumpMap] = useLoader(THREE.TextureLoader, [
    // "/earth-daymap.jpg",
    "/1_earth_8k.jpg",
    "/earth-nightmap.jpg",
    "/earth-specular-map.jpg",
    "/earth-normal-map.jpg",
    "/earth-bump-map.png", // The new, cropped bump map
  ]);
  useFrame(() => { if (meshRef.current) { meshRef.current.rotation.y += 0.002; } });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial
        map={colorMap} // Your new 8K texture
        
        normalMap={normalMap} // Adds fine, per-pixel lighting detail
        normalScale={new THREE.Vector2(0.5, 0.5)}

        metalnessMap={metalnessMap} // Makes oceans shiny, land matte
        roughness={0.6}
        
        // This is the key for physical-looking mountains.
        bumpMap={bumpMap}
        bumpScale={0.05} // A subtle value is most realistic

        emissiveMap={nightMap} // City lights
        emissive={new THREE.Color(0xfff5d4)}
        emissiveIntensity={0.8}
      />
    </mesh>
  );
};

// --- Main Canvas Component ---
const EarthCanvas = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0.5, 5], fov: 75 }}>
        <Suspense fallback={null}>
          {/* Intense, cinematic lighting for a bright Earth */}
          <ambientLight intensity={0.1} />
          <directionalLight position={[10, 10, 5]} intensity={4.0} />
          
          {/* Stars are removed as requested */}

          <Earth />
          <Clouds />
          <Atmosphere />

          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;