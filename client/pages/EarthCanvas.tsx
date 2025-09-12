import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Earth: React.FC = () => {
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (earthRef.current) earthRef.current.rotation.y += 0.0008;
    if (cloudsRef.current) cloudsRef.current.rotation.y += 0.0005;
  });

  const [diffuseMap, cloudsMap, specularMap, nightMap, normalMap] = useTexture([
    "/textures/earth-2/Earth_Diffuse_6K.jpg",      // Day surface
    "/textures/earth-2/Earth_Clouds_6K.jpg",       // Clouds
    "/textures/earth-2/Earth_Glossiness_6K.jpg",   // Specular/gloss
    "/textures/earth-2/Earth_Illumination_6K.jpg", // City lights
    "/textures/earth-2/Earth_NormalNRM_6K.jpg",   
  ]);

  return (
    <>
      {/* Earth base */}
      <mesh ref={earthRef} position={[0, -2.5, 0]} scale={3.5}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshPhongMaterial
          map={diffuseMap}
          normalMap={normalMap}
          specularMap={specularMap}
          shininess={25}
        />
      </mesh>

      {/* Night lights */}
      <mesh position={[0, -2.5, 0]} scale={3.51}>
        <sphereGeometry args={[1.01, 128, 128]} />
        <meshBasicMaterial
          map={nightMap}
          blending={THREE.AdditiveBlending}
          transparent
          opacity={0.4}   // 🔹 lower opacity for balance
        />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudsRef} position={[0, -2.5, 0]} scale={3.55}>
        <sphereGeometry args={[1.02, 128, 128]} />
        <meshPhongMaterial
          map={cloudsMap}
          transparent
          opacity={0.35}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};

const EarthCanvas: React.FC = () => {
  return (
    <Canvas
      className="absolute top-0 left-0 w-full h-full"
      camera={{ position: [0, 0, 6], fov: 45 }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.6} /> {/* 🔹 brighter ambient */}
      <directionalLight position={[5, 3, 5]} intensity={1.5} /> {/* stronger sunlight */}
      <pointLight position={[-5, -3, -5]} intensity={0.5} />
      <pointLight position={[0, 0, 6]} intensity={0.2} color="skyblue" /> {/* 🔹 rim glow */}

      {/* Stars background */}
      <Stars radius={100} depth={50} count={4000} factor={4} fade />

      {/* Earth */}
      <Earth />

      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

export default EarthCanvas;


