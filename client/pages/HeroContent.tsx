import React, { useState, useEffect } from "react";
// import { ChevronDown } from "lucide-react"; 

const HeroContent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Wait 1 second before showing the hero content
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`absolute inset-0 z-10 flex flex-col items-center text-white transition-opacity duration-2000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Container: 
          - Mobile: Starts lower at 22vh 
          - Laptop/Desktop: Retains your original 23vh 
      */}
      <div className="flex flex-col items-center text-center w-full pt-[22vh] sm:pt-[20vh] md:pt-[23vh] px-4 sm:px-6">
        
        {/* Main Headline: 
            - Mobile: text-2xl (Smaller)
            - Tablet: text-7xl (Very Large)
            - Laptop: text-4xl (Compact)
            - Desktop: text-7xl (Original)
        */}
        <h1 className="text-2xl sm:text-7xl md:text-4xl lg:text-7xl font-normal uppercase tracking-[0.05em] sm:tracking-[0.1em] leading-tight font-reem">
          REVOLUTIONIZING ORBITS
        </h1>

        {/* Subtitle: 
            - Mobile: Full width (100%), text-xs (Smallest)
            - Laptop: text-sm with px-4 padding
        */}
        <p className="w-full max-w-[100%] sm:max-w-2xl md:max-w-4xl mt-5 sm:mt-6 md:mt-8 text-xs sm:text-base md:text-sm lg:text-lg md:px-4 lg:px-0 font-light text-gray-300 font-inter leading-relaxed">
          At Spaceman Craft Private Limited, we are on a mission to change the way   
          humanity moves in space. With our breakthrough electric thruster technology, we 
          are bringing a true revolution to orbital systems.
        </p>

        {/* CTA Button:
            - Spacing reduced to mt-5 (Mobile) and mt-8 (Desktop)
        */}
        <a
          href="/solution"
          className="mt-5 md:mt-8 px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-medium border rounded-md transition-all duration-300 font-inter hover:border-[#FFD7004D] hover:bg-gradient-to-r hover:from-[#0BFFD3] hover:to-[#3070DE] hover:text-white inline-block"
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