import React from "react";
import { ChevronDown } from "lucide-react";

const HeroContent: React.FC = () => {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center text-white">
      <div className="flex flex-col items-center text-center w-full pt-[28vh] px-4">
        
        {/* 🔹 FINAL CHANGE: Using a custom tracking value to achieve the perfect "stretch" */}
        <h1 className="text-6xl font-bold uppercase tracking-[0.1em]">
          REVOLUTIONIZING ORBITS
        </h1>
        
        {/* 🔹 FINAL CHANGE: Added wider tracking to the paragraph */}
        <p className="max-w-xl mt-8 text-sm font-light text-gray-200 leading-relaxed tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        <button className="mt-10 px-8 py-3 text-sm font-medium border border-white rounded-md hover:bg-white hover:text-black transition-colors duration-300">
          Discover Our Thruster
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default HeroContent;