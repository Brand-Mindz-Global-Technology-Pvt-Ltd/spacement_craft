import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";

// The Main Earth Component, now re-engineered for a "packed" look
const Earth: React.FC = () => {
  const earthGroupRef = useRef<THREE.Group>(null!);

  // We only need to rotate the main group now, as clouds are part of it
  useFrame(() => {
    if (earthGroupRef.current) earthGroupRef.current.rotation.y += 0.0003;
  });

  const [dayMap, oceanBumpMap, specularMap, cloudsMap, nightMap, normalMap] = useTexture([
    "/textures/earth-2/earthmap-3.jpg",
    "/textures/earth-2/earth map-2.jpg",
    "/textures/earth-2/Earth_Glossiness_6K.jpg",
    "/textures/earth-2/Earth_Clouds_6K.jpg",
    "/textures/earth-2/Earth_Illumination_6K.jpg",
    "/textures/earth-2/Earth_NormalNRM_6K.jpg",
  ]);

  useEffect(() => {
    const maxAnisotropy = 16;
    const textures = [dayMap, oceanBumpMap, specularMap, cloudsMap, nightMap, normalMap];
    
    textures.forEach(texture => {
      texture.anisotropy = maxAnisotropy;
      texture.needsUpdate = true;
    });

  }, [dayMap, oceanBumpMap, specularMap, cloudsMap, nightMap, normalMap]);

  const earthPosition: [number, number, number] = [0, -5.2, 0];
  const earthScale = 5.4;

  return (
    <>
      {/* This group now contains the single, cohesive Earth model */}
      <group ref={earthGroupRef} position={earthPosition} scale={earthScale}>
        
        {/* The Main Earth Sphere */}
        <mesh>
          <sphereGeometry args={[1, 128, 128]} />
          {/* 🔹 THE DEFINITIVE CHANGE FOR A "PACKED" LOOK 🔹 */}
          <meshPhongMaterial
            map={dayMap}
            normalMap={normalMap}
            specularMap={specularMap}
            shininess={1000}
            bumpMap={oceanBumpMap}
            bumpScale={0.15}
            
            // This renders the clouds ON the same surface as the Earth.
            alphaMap={cloudsMap}
            transparent={true}
          />
        </mesh>
        
        {/* The Night Lights Sphere (still slightly larger to appear on top) */}
        <mesh>
          <sphereGeometry args={[1.001, 128, 128]} />
          <meshBasicMaterial
            map={nightMap}
            blending={THREE.AdditiveBlending}
            transparent
            opacity={0.25}
          />
        </mesh>
      </group>

      {/* 
        The separate cloud mesh has been completely removed.
        This is the key to the "packed" and realistic final result.
      */}
    </>
  );
};

// The Main Canvas That Renders Everything
const EarthCanvas: React.FC = () => {
  return (
    <Canvas
      className="absolute top-0 left-0 w-full h-full"
      camera={{ position: [0, 0, 8], fov: 45 }}
    >
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 30, 25]} intensity={70.5} />
      
      <Stars radius={150} depth={50} count={5000} factor={5} fade />
      <Earth />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};  

export default EarthCanvas; 