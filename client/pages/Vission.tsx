import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';

const Vission: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const targetId = params.get('target');
    if (!targetId) return;
    const timeout = setTimeout(() => {
      const el = document.getElementById(targetId);
      if (!el) return;
      const headerOffset = 80; // adjust to your sticky navbar height
      const rect = el.getBoundingClientRect();
      const absoluteY = window.scrollY + rect.top - headerOffset;
      window.scrollTo({ top: absoluteY, behavior: 'smooth' });
    }, 50);
    return () => clearTimeout(timeout);
  }, [location.search]);

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
          <span className="text-white font-medium">Our Vission</span>
        </nav>
        <h1 className="text-2xl md:text-4xl font-semibold font-reem text-white drop-shadow-lg">
          Our Vission
        </h1>
      </div>
    </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
 
     {/* GOING TO THE MOON */}
     <Card id="going-to-moon" className="bg-[#181c1b] border border-[#222826] rounded-2xl overflow-hidden shadow-lg mt-8">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            {/* Left: Image */}
            <div className="flex-1 flex items-center justify-center p-6 md:p-8">
              <div className="w-full h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden bg-black flex items-center justify-center">
                <img
                  src="/assets/moon-landers.jpg"
                  alt="Lunar landers on the moon"
                  className="object-cover w-full h-full rounded-xl border border-[#222826]"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </div>
            {/* Right: Text */}
            <div className="flex-1 flex flex-col justify-center px-8 py-8 md:py-12">
              <h2 className="text-white text-2xl md:text-3xl lg:text-2xl font-semibold uppercase tracking-wide mb-4 font-inter bg-[#222826] px-4 py-2 rounded-t-lg rounded-b-none shadow">
                GOING TO THE MOON
              </h2>
              <div className="mb-4">
                <span className="bg-[#f7b93e] text-[#222826] text-base md:text-lg font-semibold px-4 py-2 rounded shadow font-inter inline-block">
                  “Shaping the future of humanity’s journey to the Moon”
                </span>
              </div>
              <p className="text-[#c7cfc9] text-sm md:text-base leading-relaxed font-inter">
                Spaceman Craft envisions building technologies that will take humanity closer to the Moon. Through innovation and sustainable space solutions, we aim to inspire future generations and contribute to the lunar journey of mankind.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Center in Space */}
      <Card id="data-center-space" className="bg-[#181c1b] border border-[#222826] rounded-2xl overflow-hidden shadow-lg">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            {/* Left: Text */}
            <div className="flex-1 flex flex-col justify-center px-8 py-8 md:py-12">
              <h2 className="text-white text-2xl md:text-3xl lg:text-2xl font-semibold uppercase tracking-wide mb-4 font-inter bg-[#222826] px-4 py-2 rounded-t-lg rounded-b-none shadow">
                DATA CENTER IN SPACE
              </h2>
              <div className="mb-4">
                <span className="bg-[#f7b93e] text-[#222826] text-base md:text-lg font-semibold px-4 py-2 rounded shadow font-inter inline-block">
                  “Varsha.AI – Space-Based Data Center”
                </span>
              </div>
              <p className="text-[#c7cfc9] text-sm md:text-base leading-relaxed font-inter">
                Varsha.AI is Spaceman Craft’s AI-powered platform designed for space-based data processing and satellite operations. It ensures efficient, reliable, and sustainable management of data, supporting humanity’s journey into space and the future of lunar computing.
              </p>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex items-center justify-center p-6 md:p-8">
              <div className="w-full h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden bg-black flex items-center justify-center">
                <img
                  src="/assets/datacenter-space.jpg"
                  alt="Space-based data center"
                  className="object-cover w-full h-full rounded-xl border border-[#222826]"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SPACE TOURISM */}
    <Card id="space-tourism" className="bg-[#181c1b] border border-[#222826] rounded-2xl overflow-hidden shadow-lg mt-8">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            {/* Left: Image */}
            <div className="flex-1 flex items-center justify-center p-6 md:p-8">
              <div className="w-full h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden bg-black flex items-center justify-center">
                <img
                  src="/assets/astronaut-window.jpg"
                  alt="Astronaut looking out window at Earth"
                  className="object-cover w-full h-full rounded-xl border border-[#222826]"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </div>
            {/* Right: Text */}
            <div className="flex-1 flex flex-col justify-center px-8 py-8 md:py-12">
              <h2 className="text-white text-2xl md:text-3xl lg:text-2xl font-semibold uppercase tracking-wide mb-4 font-inter bg-[#222826] px-4 py-2 rounded-t-lg rounded-b-none shadow">
                SPACE TOURISM
              </h2>
              <div className="mb-4">
                <span className="bg-[#f7b93e] text-[#222826] text-base md:text-lg font-semibold px-4 py-2 rounded shadow font-inter inline-block">
                  “Experience the wonder of space—an unforgettable journey beyond Earth”
                </span>
              </div>
              <p className="text-[#c7cfc9] text-sm md:text-base leading-relaxed font-inter">
                Spaceman Craft aims to make space travel an unforgettable experience for civilians, combining advanced spacecraft technology with safety and sustainability. Our goal is to let everyone witness the beauty of Earth from orbit and inspire a new era of space exploration.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

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
        </p>             <div className="mt-3 flex gap-4 md:mt-0">
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

export default Vission;
