import React from "react";
import { ChevronDown } from "lucide-react";

const HeroContent: React.FC = () => {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center text-white">
      <div className="flex flex-col items-center text-center w-full pt-[23vh] px-4">
        {/* Main Headline - Reem Kufi Font */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-normal uppercase tracking-[0.1em] leading-tight font-reem">
          REVOLUTIONIZING ORBITS
        </h1>

        {/* Subtitle - Inter Font */}
        <p className="max-w-4xl mt-8 text-base md:text-lg font-light text-gray-300 font-inter leading-relaxed">
        At Spaceman Craft Private Limited, we are on a mission to change the way   
humanity moves in space. With our breakthrough electric thruster technology, we 
are bringing a true revolution to orbital systems.</p>
        {/* CTA Button - Inter Font with Figma Gradient Hover and ShinyText */}
        {/* Use react-router-dom Link for client-side navigation without reload */}
        <a
          href="/solution"
          className="mt-10 px-8 py-3 text-base font-medium border rounded-md transition-all duration-300 font-inter hover:border-[#FFD7004D] hover:bg-gradient-to-r hover:from-[#0BFFD3] hover:to-[#3070DE] hover:text-white inline-block"
          onClick={e => {
            e.preventDefault();
            window.history.pushState({}, '', '/solution');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
        >
          <span className="shiny-text">Discover Our Thruster</span>
        </a>
      </div>

     
    </div>
  );
};

export default HeroContent;
