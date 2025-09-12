import React from "react";
import { ChevronDown } from "lucide-react";

const HeroContent: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
        REVOLUTIONIZING ORBITS
      </h1>
      <p className="max-w-2xl mt-6 text-lg text-gray-300 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore magna aliqua. Ut enim ad minim veniam.
      </p>
      <button className="mt-8 px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition">
        Discover Our Thruster
      </button>
      <div className="absolute bottom-10 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default HeroContent;
