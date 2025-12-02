import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '../components/Navbar';

const Mission: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timelineData = [
    "Incubated at Crescent Innovation and Incubation Council",
    "Mission Planning and Orbital Mechanics using simulation softwares available at IN-SPACe",
    "Building mobile applications with existing satellite data from VEDAS & BHUVAN",
    "Advanced satellite constellation deployment and orbital maintenance protocols",
    "Commercial space operations and interplanetary mission capabilities"
  ];

  const slideTimeline = (direction) => {
    const total = timelineData.length;

    setCurrentIndex((prev) => {
        const maxIndex = 3; // 5 cards total (0, 1, 2, 3, 4)
    const newIndex = Math.min(Math.max(currentIndex + direction, 0), maxIndex);
    setCurrentIndex(newIndex);
      let next = prev + direction;

      if (next < 0) next = total - 1; // loop to last
      if (next >= total) next = 0;   // loop to first

      return next;
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
       <div className="relative w-full min-h-[350px] md:min-h-[500px] h-[40vw] max-h-[600px] flex items-end justify-start overflow-hidden">
      <img
        src="/assets/contactbg.png"
        alt="Spacecraft in orbit"
        className="absolute inset-0 w-full h-full object-cover object-center"
        draggable={false}
        style={{ minHeight: "350px", maxHeight: "600px" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
      <div className="relative z-10 px-6 md:px-16 pb-8 md:pb-16 w-full">
        {/* Breadcrumb */}
        <nav className="mb-3 flex items-center space-x-2 text-white/80 text-xs md:text-sm font-inter">
          <a href="/" className="hover:underline">Home</a>
          <span className="mx-1">/</span>
          <span className="text-white font-medium">Our Mission</span>
        </nav>
        <h1 className="text-2xl md:text-4xl font-semibold font-reem text-white drop-shadow-lg">
          Our Mission
        </h1>
      </div>
    </div>

{/* Mission Description */}
<div className="max-w-7xl mx-auto px-2 mt-8">
  <p className="text-white/80 text-xs md:text-sm font-inter mb-2">
    Lorem ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    Lorem ipsum has been the industry's standard dummy text ever since the 1500s...
  </p>
</div>

{/* Timeline/Steps Section */}
<div className="max-w-7xl mx-auto px-0 mt-8 relative">
  {/* Scrollable Container */}
  <div className="overflow-hidden w-full">
        <div
          className="flex items-center transition-transform duration-500"
          style={{ transform: `translateX(${-currentIndex * 360}px)` }}
        >
          {timelineData.map((text, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={index}
                className={`
                  relative flex-shrink-0 w-[360px] h-[200px] 
                  mx-6
                  rounded-lg text-left flex items-center justify-center
                  border shadow-lg
                  ${isActive
                    ? "bg-gradient-to-br from-[#1de9b6]/30 via-[#00bfae]/20 to-[#181c1b] border-teal-400/60 shadow-[0_0_24px_2px_rgba(29,233,182,0.25)]"
                    : "bg-[#181c1b] border-[#222826]"
                  }
                `}
              >
  <div className="h-16 w-[3px] bg-white/40 ml-3 mr-4"></div>

   <span
                  className={`
                    text-sm font-inter text-center px-4
                    ${isActive ? "text-teal-200 font-semibold md:text-base" : "text-white/80"}
                  `}
                >
    {text}
  </span>

  {/* FIXED: Dotted line placed between cards */}
{index < timelineData.length - 1 && (
                  <div
                    className="absolute top-1/2 left-full 
                               transform -translate-y-1/2
                               w-12 border-t-2 border-dotted border-white/30 
                               hidden md:block"
                  ></div>
                )}
</div>

        );
      })}
    </div>
  </div>

  {/* Navigation Buttons */}
   <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={() => slideTimeline(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-black border border-gray-500 text-gray-400 hover:border-teal-400"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={() => slideTimeline(1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-black border border-teal-400 text-teal-400 hover:bg-teal-500/10"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

  </div>
</div>




    <div className="w-full flex flex-col items-center justify-center mt-16">
      {/* Image Section */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl rounded-lg overflow-hidden shadow-lg border border-[#222826] bg-[#0a0a1a]">
          <img
            src="/assets/varsaai.png"
            alt="VARSHAAI Heart Wave"
            className="w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[520px] object-cover object-center"
            draggable={false}
            style={{ background: "#0a0a1a" }}
          />
        </div>
      </div>
      {/* Description Section */}
      <div className="w-full max-w-7xl mt-4 sm:mt-8 px-2 sm:px-4">
        <p className="text-white/80 text-xs sm:text-sm md:text-base font-inter mb-2 leading-relaxed">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>

    {/* Footer */}
    <footer className="relative overflow-hidden text-white">
      <div className="absolute inset-0">
        <img
          src="/assets/Footer.png"
          alt="Star field footer background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <img src="/assets/01-logo.jpg" alt="Spacemancraft" className="mx-auto mb-4 h-10 w-auto" />
          <p className="text-sm leading-relaxed text-white/80">
            A revolutionary blend of spacecraft and passenger vehicle, powered by cost‑effective solar electric propulsion.
            It paves the way for human exploration across Earth's orbit and beyond, making space travel more affordable and
            accessible than ever before.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-base font-semibold">Navigate</h3>
            <ul className="space-y-2 text-sm text-white/85">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/product" className="hover:text-white">Product</a></li>
              <li><a href="/solution" className="hover:text-white">Solution</a></li>
              <li><a href="#vision" className="hover:text-white">Vision</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li>
                <a href="/about" className="hover:text-white">
                  About us
                </a>
              </li>
              
              <li>
              <a href="/contactus" className="hover:text-white">
              Contact us
              </a>
              </li>
              
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold">Reach Out</h3>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-white/70" />
                <span>Tamil Nadu, India</span>
              </li>
              <li className="flex items-start gap-3 break-all">
                <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-white/70" />
                <a href="mailto:spacemancraftindia@gmail.com" className="hover:text-white">spacemancraftindia@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold">Enquire Now</h3>
            <button
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-2.5 text-sm font-medium text-black shadow-[0_0_35px_rgba(56,189,248,0.45)] transition hover:from-cyan-300 hover:to-blue-500"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Discover Our Thruster
            </button>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-4 text-xs text-white/70 md:flex md:items-center md:justify-between">
    <p>
          Copyright © 2025 Nellai Tours Made with <span role="img" aria-label="love">❤️</span> by{" "}
          <a
            href="https://www.brandmindz.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-white"
          >
            Brand Mindz
          </a>{" "}
          | All rights reserved
        </p>          <div className="mt-3 flex gap-4 md:mt-0">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Mission;
