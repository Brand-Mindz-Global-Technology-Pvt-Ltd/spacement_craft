import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '../components/Navbar';

const Career: React.FC = () => {
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
          <span className="text-white font-medium">Our Career</span>
        </nav>
        <h1 className="text-2xl md:text-4xl font-semibold font-reem text-white drop-shadow-lg">
          Our Career
        </h1>
      </div>
    </div>


      {/* Top Section: Join Our Team */}
      <section className="w-full flex flex-col items-center justify-center pt-12 pb-10 px-4 bg-black relative z-10">
        <h2 className="text-white text-xl md:text-2xl font-inter font-normal text-center mb-1 tracking-wide">
          JOIN OUR TEAM AT
        </h2>
        <h1 className="text-[#1de9b6] text-2xl md:text-4xl font-reem font-semibold text-center mb-4 tracking-wider">
          SPACEMANCARFT
        </h1>
        <p className="max-w-2xl text-xs md:text-sm text-white/80 font-inter text-center mb-7">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <button
          className="bg-gradient-to-r from-[#1de9b6] to-[#00bfae] hover:from-[#00bfae] hover:to-[#1de9b6] text-white font-inter font-semibold px-8 py-2.5 rounded-md shadow-lg transition-all duration-200 mb-2"
        >
          JOIN OUR TEAM
        </button>
      </section>
      {/* Image & Quote Section - Overlaid Content on Wide Image */}
      <section className="w-full flex flex-col items-center justify-center mt-8">
        <div className="relative w-full max-w-7xl rounded-2xl overflow-hidden shadow-2xl border border-[#222826] bg-black flex flex-col items-center min-h-[260px] md:min-h-[380px]">
          {/* Background Image */}
          <img
            src="/assets/careerthought.png"
            alt="Eclipse Career"
            className="absolute inset-0 w-full h-full object-cover object-center"
            draggable={false}
            style={{ zIndex: 0, minHeight: "260px", maxHeight: "420px" }}
          />
          {/* Optional: Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          {/* Quote Content - Centered Over Image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 py-8">
            <p className="text-white text-center text-base md:text-xl font-inter font-medium mb-3 tracking-wide drop-shadow-lg">
              "THE ONLY WAY TO DO GREAT WORK IS TO<br className="hidden md:block" /> LOVE WHAT YOU DO"
            </p>
            <span className="text-[#1de9b6] text-sm md:text-lg font-inter font-semibold text-center drop-shadow-lg">
              STEVE JOBS
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Card with Job Listings */}
      <section className="w-full flex flex-col items-center justify-center mt-16 mb-12 px-4">
        <div className="w-full max-w-7xl rounded-2xl overflow-hidden border-2 border-[#1de9b6]/60 shadow-[0_0_30px_rgba(29,233,182,0.3)] bg-[#0a0a0a]">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Section - Image Carousel */}
            <div className="lg:w-2/5 relative">
              <div className="relative h-80 lg:h-96 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center">
                {/* Placeholder for person working image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-700/30 to-gray-800/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-600/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">Person working at desk</p>
                  </div>
                </div>
                
                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right Section - Job Listings */}
            <div className="lg:w-3/5 p-8 lg:p-12">
              <div className="space-y-8">
                
                {/* Job 1 - UI/UX Designer */}
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-20 bg-[#1de9b6] rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <p className="text-[#1de9b6] text-xs font-semibold uppercase tracking-wider mb-1">DESIGNER</p>
                        <h3 className="text-white text-lg font-bold mb-2">UI/UX DESIGNER</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                      </div>
                      <button className="mt-4 lg:mt-0 lg:ml-6 bg-transparent border border-white text-white hover:bg-gradient-to-r hover:from-[#1de9b6] hover:to-blue-600 hover:border-transparent px-6 py-2 rounded-md text-sm font-semibold transition-all duration-200 group">
                        <span className="group-hover:hidden">APPLY NOW</span>
                        <span className="hidden group-hover:inline">JOIN OUR TEAM</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Job 2 - Front End Developer */}
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-20 bg-[#1de9b6] rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <p className="text-[#1de9b6] text-xs font-semibold uppercase tracking-wider mb-1">DEVELOPER</p>
                        <h3 className="text-white text-lg font-bold mb-2">FRONT END DEVELOPER</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                      </div>
                      <button className="mt-4 lg:mt-0 lg:ml-6 bg-transparent border border-white text-white hover:bg-gradient-to-r hover:from-[#1de9b6] hover:to-blue-600 hover:border-transparent px-6 py-2 rounded-md text-sm font-semibold transition-all duration-200 group">
                        <span className="group-hover:hidden">APPLY NOW</span>
                        <span className="hidden group-hover:inline">JOIN OUR TEAM</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Job 3 - Back End Developer */}
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-20 bg-[#1de9b6] rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <p className="text-[#1de9b6] text-xs font-semibold uppercase tracking-wider mb-1">DEVELOPER</p>
                        <h3 className="text-white text-lg font-bold mb-2">BACK END DEVELOPER</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                      </div>
                      <button className="mt-4 lg:mt-0 lg:ml-6 bg-transparent border border-white text-white hover:bg-gradient-to-r hover:from-[#1de9b6] hover:to-blue-600 hover:border-transparent px-6 py-2 rounded-md text-sm font-semibold transition-all duration-200 group">
                        <span className="group-hover:hidden">APPLY NOW</span>
                        <span className="hidden group-hover:inline">JOIN OUR TEAM</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Job 4 - SEO Analyst */}
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-20 bg-[#1de9b6] rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <p className="text-[#1de9b6] text-xs font-semibold uppercase tracking-wider mb-1">MARKETING</p>
                        <h3 className="text-white text-lg font-bold mb-2">SEO ANALYST</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                      </div>
                      <button className="mt-4 lg:mt-0 lg:ml-6 bg-transparent border border-white text-white hover:bg-gradient-to-r hover:from-[#1de9b6] hover:to-blue-600 hover:border-transparent px-6 py-2 rounded-md text-sm font-semibold transition-all duration-200 group">
                        <span className="group-hover:hidden">APPLY NOW</span>
                        <span className="hidden group-hover:inline">JOIN OUR TEAM</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Quote Section */}
      <section className="w-full flex flex-col items-center justify-center mt-8 mb-16 px-4">
        <p className="text-white text-xl md:text-2xl font-inter font-medium text-center tracking-wide">
          "LET'S BUILD WHAT'S NEXT, TOGETHER"
        </p>
      </section>

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
            <p>© 2025 Spacemancraft. All Rights Reserved.</p>
            <div className="mt-3 flex gap-4 md:mt-0">
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

export default Career;
