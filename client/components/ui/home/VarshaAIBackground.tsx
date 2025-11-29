import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';

// Define the custom shader material
const WaveShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uTime: 0,
    uTexture: new THREE.Texture(),
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float uTime;
    uniform sampler2D uTexture;
    varying vec2 vUv;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      // 1. CALCULATE CIRCLE MASK
      // We calculate distance from the center (0.5, 0.5)
      float dist = length(vUv - 0.5);
      
      // If distance > 0.5, we want alpha to be 0. 
      // smoothstep creates a nice anti-aliased edge.
      float alpha = 1.0 - smoothstep(0.49, 0.50, dist);

      // 2. FLUID DISTORTION
      // We apply the noise to the UVs used for the texture lookup
      float noiseVal = snoise(vUv * 3.0 + uTime * 0.2);
      vec2 distortedUv = vUv + vec2(noiseVal * 0.02, noiseVal * 0.03);

      // 3. FINAL COLOR
      vec4 textureColor = texture2D(uTexture, distortedUv);
      
      // Combine texture color with our circle alpha mask
      gl_FragColor = vec4(textureColor.rgb, textureColor.a * alpha);
    }
  `
);

extend({ WaveShaderMaterial });

const Scene = () => {
  const materialRef = useRef<any>(null);
  const texture = useLoader(THREE.TextureLoader, '/assets/Varsha ai.png');
  
  // Calculate a size that fits in the viewport but stays square
  const { viewport } = useLoader(THREE.TextureLoader, '/assets/Varsha ai.png') ? 
    // This is a dummy check to access viewport in hook, or simply useThree()
    { viewport: { width: window.innerWidth, height: window.innerHeight } } : { viewport: {width:1, height:1}};
  
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.getElapsedTime();
    }
  });

  // Determine size: Use 80% of the smallest screen dimension
  // This ensures it fits on mobile (width) and desktop (height)
  // You can hardcode this to numbers like [3, 3, 1] if you prefer
  const size = Math.min(viewport.width, viewport.height) * 0.8 || 3;

  return (
    <mesh scale={[size, size, 1]}>
      {/* A simple square geometry is enough, the shader makes it round */}
      <planeGeometry args={[1, 1]} /> 
      <waveShaderMaterial
        ref={materialRef}
        uTexture={texture}
        transparent={true} // Essential for the circle cutout to work
      />
    </mesh>
  );
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      waveShaderMaterial: any;
    }
  }
}

const VarshaAIBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 5] }} // Moved camera back slightly
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* We need to use a hook to get viewport, so we wrap Scene content */}
        <ResponsiveScene />
      </Canvas>
    </div>
  );
};

// Helper component to access 'useThree' viewport correctly
import { useThree } from '@react-three/fiber';

const ResponsiveScene = () => {
  const { viewport, size } = useThree();
  const materialRef = useRef<any>(null);
  const texture = useLoader(THREE.TextureLoader, '/assets/Varsha ai.png');

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.getElapsedTime();
    }
  });

  // Logic: Create a square that fits the screen
  const scale = Math.min(viewport.width, viewport.height) * 0.7; 

  return (
    <mesh scale={[scale, scale, 1]}>
      <planeGeometry args={[1, 1]} />
      <waveShaderMaterial
        ref={materialRef}
        uTexture={texture}
        transparent={true}
      />
    </mesh>
  );
}

export default VarshaAIBackground;