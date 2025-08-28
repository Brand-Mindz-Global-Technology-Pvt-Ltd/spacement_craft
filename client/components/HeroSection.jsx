import React from "react";
import { Header } from "./Header";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import { Canvas } from "@react-three/fiber";

export const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] bg-black text-white overflow-hidden">
      {/* Top: Header */}
      <Header />

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <h1
          className="font-reem uppercase leading-[1.08] text-white
                     tracking-[0.08em] md:tracking-[0.12em]
                     text-[clamp(44px,8vw,96px)]"
        >
          Revolutionizing Orbits
        </h1>

        <p className="mt-6 max-w-[640px] text-[16px] leading-[26px] text-white/85">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <button
          className="mt-7 border border-white/90 px-8 py-3
                     uppercase text-[14px] tracking-[0.08em]
                     text-white hover:bg-white hover:text-black transition-colors"
        >
          Discover Our Thruster
        </button>
      </div>

      {/* Canvas for 3D (Earth will go here) */}
      <Canvas className="absolute inset-0 z-0">
        {/* empty for now */}
        <ambientLight intensity={0.5} />
      </Canvas>

      {/* Chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <ChevronDownIcon className="w-8 h-8 text-white/90 animate-bounce" />
      </div>
    </section>
  );
};
