import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stars } from "@react-three/drei";
import { Suspense, useRef, useEffect, forwardRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type PrimitiveProps = JSX.IntrinsicElements["primitive"];

// Earth with auto-rotation
const Earth = forwardRef<THREE.Object3D, PrimitiveProps>((props, ref) => {
  const { scene } = useGLTF("/models/earth.glb");
  const earthRef = useRef<THREE.Object3D>(null);

  // allow parent ref
  const mergedRef = (node: THREE.Object3D) => {
    earthRef.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) (ref as any).current = node;
  };

  // rotation only works inside Canvas
  useEffect(() => {
    let frameId: number;
    const animate = () => {
      if (earthRef.current) earthRef.current.rotation.y += 0.002;
      frameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return <primitive ref={mergedRef} object={scene} {...props} />;
});
Earth.displayName = "Earth";

const Moon = forwardRef<THREE.Object3D, PrimitiveProps>((props, ref) => {
  const { scene } = useGLTF("/models/moon.glb");
  return <primitive ref={ref} object={scene} {...props} />;
});
Moon.displayName = "Moon";

const Satellite = forwardRef<THREE.Object3D, PrimitiveProps>((props, ref) => {
  const { scene } = useGLTF("/models/satellite.glb");
  return <primitive ref={ref} object={scene} {...props} />;
});
Satellite.displayName = "Satellite";

export default function Scene() {
  const earthRef = useRef<THREE.Object3D>(null);
  const moonRef = useRef<THREE.Object3D>(null);
  const satRef = useRef<THREE.Object3D>(null);

  useEffect(() => {
    if (!earthRef.current || !moonRef.current || !satRef.current) return;

    // reset initial positions
    earthRef.current.position.set(0, -1, 0);
    satRef.current.position.set(0, -5, 0);
    moonRef.current.position.set(6, 0, -2);

    // make moon initially invisible by material opacity
    moonRef.current.traverse((child: any) => {
      if (child.isMesh) {
        child.material.transparent = true;
        child.material.opacity = 0;
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Earth slides left
    tl.to(earthRef.current.position, { x: -3 }, "step1");

    // Satellite rises
    tl.to(satRef.current.position, { y: 0 }, "step2");

    // Moon fades/slides in
    tl.to(moonRef.current.position, { x: 3, z: -1 }, "step3");
    tl.to(
      moonRef.current.children.map((c: any) => c.material),
      { opacity: 1, duration: 1 },
      "step3"
    );
  }, []);

  return (
    <div className="w-full h-[200vh]" id="scroll-section">
      <Canvas camera={{ position: [0, 1.5, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <Stars radius={200} depth={50} count={5000} factor={4} fade />
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          <Earth ref={earthRef} scale={1.5} />
          <Moon ref={moonRef} scale={0.7} />
          <Satellite ref={satRef} scale={0.8} />

          <OrbitControls enableZoom={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}
