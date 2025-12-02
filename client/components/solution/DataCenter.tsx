import React from "react";

const DataCenter = () => {
  return (
    <section className="relative w-full py-14 md:py-20 px-2 sm:px-4 overflow-hidden">
      {/* Subtle black gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-reem text-[1.5rem] xs:text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white tracking-wider drop-shadow-lg">
            Data Centers in Space
          </h2>
        </div>

        {/* Main Content Container */}
        <div className="bg-gradient-to-r from-black/90 to-black/60 rounded-2xl border border-gray-600/30 p-4 xs:p-6 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Section - Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 w-full">
              {/* VARSHA.AI Header */}
              <div className="w-full">
                <h3
                  className="font-reem text-[1.7rem] xs:text-[2.2rem] md:text-[2.7rem] font-normal uppercase text-white tracking-wide mb-3 md:mb-4 leading-tight drop-shadow-lg"
                  style={{ letterSpacing: "0.08em" }}
                >
                  Varsha.AI
                </h3>
                {/* Horizontal line separator */}
                <div className="w-full h-px bg-gray-400/50 mb-4 md:mb-6"></div>
              </div>

              {/* Orange Banner Button - matches line width */}
              <div className="w-full flex justify-center md:justify-start">
                <div className="w-full max-w-xs md:max-w-full">
                  <div
                    className="flex items-center justify-center rounded-[8px] bg-[#D6891A] text-white font-inter font-semibold text-base xs:text-[1.1rem] md:text-[1.2rem] uppercase tracking-wide shadow-lg drop-shadow-lg"
                    style={{
                      height: "42px",
                      minHeight: "42px",
                      maxHeight: "42px",
                      letterSpacing: "0.03em",
                      width: "100%",
                    }}
                  >
                    RAIN OF SPACE DATA INTELLIGENCE
                  </div>
                </div>
              </div>

              {/* Description Content */}
              <div className="text-white/90 font-inter text-[0.97rem] xs:text-sm md:text-base leading-relaxed space-y-2 md:space-y-4 text-left w-full drop-shadow-lg">
                <p>
                  <span className="font-semibold">Varsha.AI – Space-Based Data Center</span>
                  <br className="hidden xs:block" />
                  Varsha.AI is Spaceman Craft’s AI-powered platform designed for space-based&nbsp;
                  data processing and satellite operations. It ensures efficient, reliable, and sustainable&nbsp;
                  management of data, supporting humanity’s journey into space and the future of lunar&nbsp;
                  computing.
                </p>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="flex items-center justify-center w-full mt-8 md:mt-0">
              <img
                src="/assets/varsa.png"
                alt="Varsha.AI Data Center Graphic"
                className="w-full max-w-[320px] xs:max-w-sm md:max-w-md rounded-xl shadow-2xl border border-black object-contain drop-shadow-2xl"
                style={{ background: "#181c1b" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCenter;
