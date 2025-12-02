import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

// ==================================================================
// YOUR ORIGINAL TEXTURE PATHS - UNCHANGED
// ==================================================================
const earthDayMapUrl = "/1_earth_8k.jpg";
const earthBumpMapUrl = "/earth-bump-map.png";
const earthSpecularMapUrl = "/earth-specular-map.jpg";
const earthNightMapUrl = "/earth-nightmap.jpg";
const earthCloudsMapUrl = "/earth-clouds.jpg";

// ==================================================================
// YOUR ORIGINAL ATMOSPHERE COMPONENT - UNCHANGED
// ==================================================================
const Atmosphere = () => {
  const shader = useMemo(() => ({
    uniforms: {
      uInnerColor: { value: new THREE.Color("#2e7cff") }, // deep blue near Earth
      uOuterColor: { value: new THREE.Color("#ffffff") }, // soft fade to white
      uIntensity: { value: 1.0 },
    },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uInnerColor;
      uniform vec3 uOuterColor;
      uniform float uIntensity;
      varying vec3 vNormal;

      void main() {
        // Fresnel effect controls edge strength
        float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);

        // Blend between inner blue and outer white
        vec3 color = mix(uInnerColor, uOuterColor, fresnel);

        // Apply fade
        gl_FragColor = vec4(color, fresnel * uIntensity * 0.4);
      }
    `,
    side: THREE.BackSide,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }), []);

  return (
    <mesh scale={[1.02, 1.02, 1.02]}>
      <sphereGeometry args={[4.5, 128, 128]} />
      <shaderMaterial args={[shader]} />
    </mesh>
  );
};


// ==================================================================
// YOUR ORIGINAL CLOUDS COMPONENT - WITH THE FIX
// ==================================================================
const Clouds = () => {
  const cloudsRef = useRef<THREE.Mesh>(null!);

  // ***** THIS IS THE FIX *****
  // Changed THREE.Loader to the correct THREE.TextureLoader
  const cloudsMap = useLoader(THREE.TextureLoader, earthCloudsMapUrl);
  // **************************

  useFrame(() => {
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <mesh ref={cloudsRef} scale={[0, 1.01, 1.01]}>
      <sphereGeometry args={[4.5, 64, 64]} />
      <meshStandardMaterial
        alphaMap={cloudsMap}
        transparent={true}
        opacity={0.35}
      />
    </mesh>
  );
};

// ==================================================================
// YOUR ORIGINAL EARTH COMPONENT - UNCHANGED (WITH REVOLVING SPEED)
// ==================================================================
const Earth = ({ scrollVelocity, onLoaded }: { scrollVelocity: number, onLoaded?: () => void }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  const [colorMap, bumpMap, roughnessMap, nightMap] = useLoader(THREE.TextureLoader, [
    earthDayMapUrl,
    earthBumpMapUrl,
    earthSpecularMapUrl,
    earthNightMapUrl,
  ]);

  useEffect(() => {
    if (onLoaded) {
      onLoaded();
    }
  }, [onLoaded]);

  useFrame(() => {
    if (meshRef.current) {
      const baseSpeed = 0.0003; // Correct, visible revolving speed
      const velocityMultiplier = Math.abs(scrollVelocity) * 0.0001;
      const totalSpeed = baseSpeed + velocityMultiplier;
      meshRef.current.rotation.y += totalSpeed;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[4.5, 100, 100]} />
      <meshStandardMaterial
        map={colorMap}
        bumpMap={bumpMap}
        bumpScale={0.05}
        roughnessMap={roughnessMap}
        metalness={0.1}
        emissiveMap={nightMap}
        emissive={new THREE.Color("#ffffbb")}
        emissiveIntensity={1.5}
      />
    </mesh>
  );
};

// const Satellite = () => {
//   const satelliteRef = useRef<THREE.Group>(null!);

//   // This hook loads your 3D model from the /public folder
//   const { scene } = useGLTF("/satellite.glb");

//   // A subtle floating animation to make it feel alive
//   useFrame(({ clock }) => {
//     if (satelliteRef.current) {
//       satelliteRef.current.position.y += Math.sin(clock.getElapsedTime() * 0.5) * 0.003;
//     }
//   });

//   // We render the loaded scene using the <primitive> object.
//   // This is the standard way to display imported 3D models.
//   return <primitive ref={satelliteRef} object={scene} />;
// };

// ==================================================================
// MAIN CANVAS COMPONENT - UPDATED FOR RESPONSIVENESS
// ==================================================================
const EarthCanvas = ({ scrollProgress = 0 }: { scrollProgress?: number }) => {
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Entrance animation state (Fade In)
  const [isLoaded, setIsLoaded] = useState(false);

  // --- RESPONSIVE STATE ---
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check initial size
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();

    // Add listener for resizing
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  // ------------------------

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const velocity = currentScrollY - lastScrollY.current;
      setScrollVelocity(velocity);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => { setScrollVelocity(0); }, 100);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const easeOutCubic = (x: number): number => 1 - Math.pow(1 - x, 3);
  const progress = easeOutCubic(scrollProgress);

  // --- RESPONSIVE CONFIGURATION ---
  // Adjusted scale and position based on 'isMobile' state
  const initial = {
    // Mobile: Shift Y slightly (optional), Desktop: -6.6
    position: new THREE.Vector3(0, isMobile ? -3.0 : -6.6, 2),
    rotation: new THREE.Euler(-0.5, 0, 0),
    // Mobile: Scale 0.9, Desktop: 1.5
    scale: isMobile ? 0.7 : 1.5,
    // Mobile: Camera further back (16), Desktop: 12
    cameraZ: isMobile ? 16 : 12,
  };

  const final = {
    // Mobile: Adjust final position if needed, else keep similar logic
    position: new THREE.Vector3(isMobile ? -4 : -10, isMobile ? -5 : -7, 7),
    rotation: new THREE.Euler(0, 0, 0.5),
    // Mobile: Scale 1.2, Desktop: 2.2
    scale: isMobile ? 1.2 : 2.2,
    cameraZ: 20,
  };
  // --------------------------------

  const satelliteProgress = Math.max(0, Math.min(1, (progress - 0.5) / 0.5));

  const initialSatellite = {
    position: new THREE.Vector3(-6, -3, -2),
    rotation: new THREE.Euler(0, 0, 0),
    scale: 0,
  };

  // ==================================================================
  // TWEAK THESE VALUES TO PERFECTLY POSITION YOUR NEW 3D MODEL
  // ==================================================================
  const finalSatellite = {
    position: new THREE.Vector3(2, -1, 5),
    // We add a rotation on the X-axis to tilt the model up, which is common for .glb files.
    // The Y-axis rotation angles it towards the camera.
    rotation: new THREE.Euler(Math.PI / 12, Math.PI / 4, Math.PI / 16),
    scale: 2.0, // .glb models are often much larger, so we start with a smaller scale.
  };
  // ==================================================================

  const satellitePosition = new THREE.Vector3().lerpVectors(initialSatellite.position, finalSatellite.position, satelliteProgress);
  const satRotX = THREE.MathUtils.lerp(initialSatellite.rotation.x, finalSatellite.rotation.x, satelliteProgress);
  const satRotY = THREE.MathUtils.lerp(initialSatellite.rotation.y, finalSatellite.rotation.y, satelliteProgress);
  const satRotZ = THREE.MathUtils.lerp(initialSatellite.rotation.z, finalSatellite.rotation.z, satelliteProgress);
  const satelliteRotation = new THREE.Euler(satRotX, satRotY, satRotZ);
  const satelliteScale = THREE.MathUtils.lerp(initialSatellite.scale, finalSatellite.scale, satelliteProgress);


  // earthpostion

  const earthPosition = new THREE.Vector3().lerpVectors(initial.position, final.position, progress);
  const rotX = THREE.MathUtils.lerp(initial.rotation.x, final.rotation.x, progress);
  const rotY = THREE.MathUtils.lerp(initial.rotation.y, final.rotation.y, progress);
  const rotZ = THREE.MathUtils.lerp(initial.rotation.z, final.rotation.z, progress);
  const earthRotation = new THREE.Euler(rotX, rotY, rotZ);
  const earthScale = THREE.MathUtils.lerp(initial.scale, final.scale, progress);
  const cameraZ = THREE.MathUtils.lerp(initial.cameraZ, final.cameraZ, progress);

  return (
    <div
      className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <Canvas camera={{ position: [0, 0, cameraZ], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <directionalLight position={[20, 9, 5]} intensity={2.5} />

          <group
            position={earthPosition}
            rotation={earthRotation}
            scale={earthScale}
          >
            <Earth scrollVelocity={scrollVelocity} onLoaded={() => setIsLoaded(true)} />
            {/* <Clouds /> */}
            {/* <Atmosphere />   */}
          </group>

          {/* --- STEP 3: ADD THE SATELLITE TO THE SCENE --- */}
          {/* <group
            position={satellitePosition}
            rotation={satelliteRotation}
            scale={satelliteScale}
          >
           
            <pointLight 
              position={[2, 3, 5]} // Positioned relative to the satellite
              intensity={200}       // Point lights need a much higher intensity
              distance={100}        // How far the light reaches
              decay={2}             // How fast the light fades with distance
            />
            
           
            <Satellite />
            
       
          </group> */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;