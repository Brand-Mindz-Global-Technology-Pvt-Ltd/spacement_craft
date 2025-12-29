import React from "react";

const TopSection = ()=> {
    return (
        <>
         {/* Top Section: Join Our Team */}
      <section className="w-full flex flex-col items-center justify-center pt-12 pb-10 px-4 bg-black relative z-10">
        <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-reem font-medium text-center mb-1 tracking-wide">
          JOIN OUR TEAM AT
        </h2>
        <h1 className="text-[#0BFFD3] text-2xl md:text-4xl font-reem font-semibold text-center mb-4 tracking-wider">
          SPACEMANCARFT
        </h1>
        <p className="px-12 text-xs md:text-sm text-white/80 font-inter text-justify mb-7 lg:tracking-wide lg:leading-relaxed">
        At Spacemancraft, we are building the future of space technology through innovation, precision engineering, and bold ideas. Our team works on real-world space missions, satellite systems, and advanced research that push boundaries beyond Earth. We believe in curiosity, collaboration, and continuous learning. If you are passionate about space, technology, and impact-driven work, Spacemancraft offers the platform to grow, innovate, and shape tomorrow together with purpose, integrity, global vision, and responsibility.
        </p>
        <button
          className="rounded-lg bg-gradient-to-b from-[#0BFFD3] via-cyan-400 to-[#316BDE] px-5 py-2.5 text-xs md:text-sm font-normal font-reem text-white shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(56,189,248,0.45)]"
        >
          JOIN OUR TEAM
        </button>
      </section>
        </>
    )
}

export default TopSection;