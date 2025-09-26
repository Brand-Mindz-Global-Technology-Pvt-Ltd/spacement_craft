import React from "react";
import { ChevronDown } from "lucide-react";

const HeroContent: React.FC = () => {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center text-white">
      <div className="flex flex-col items-center text-center w-full pt-[20vh] px-4">
        {/* Main Headline - Reem Kufi Font */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-normal uppercase tracking-[0.1em] leading-tight font-reem">
          REVOLUTIONIZING ORBITS
        </h1>

        {/* Subtitle - Inter Font */}
        <p className="max-w-4xl mt-8 text-base md:text-lg font-light text-gray-300 font-inter leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        {/* CTA Button - Inter Font with Figma Gradient Hover and ShinyText */}
        <button className="mt-10 px-8 py-3 text-base font-medium border rounded-md transition-all duration-300 font-inter hover:border-[#FFD7004D] hover:bg-gradient-to-r hover:from-[#0BFFD3] hover:to-[#3070DE] hover:text-white">
          <span className="shiny-text">Discover Our Thruster</span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={28} className="text-white/80" />
      </div>
    </div>
  );
};

export default HeroContent;
