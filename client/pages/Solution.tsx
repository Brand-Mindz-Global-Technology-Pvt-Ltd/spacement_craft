import React, { useState } from "react";
import Navbar from "../components/Navbar";

const items = [
  {
    title: "Hyperspectral Vision",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/44d47a5d1658608c03887f3ffd188776125c7cf4?width=1051",
    desc: `Our Hyperspectral Vision technology captures light across hundreds of spectral bands, revealing details invisible to the human eye. It enables precise material identification, advanced imaging, and deeper insights across industries such as agriculture, environmental monitoring, defense, and space exploration. By analyzing every wavelength, we turn complex data into actionable intelligence. Experience a new dimension of vision where every detail matters.`,
  },
  {
    title: "Defence Surveillance",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/3f1e84217d78a591e5fe172b0a9b8d3029537341?width=1009",
    desc: `Advanced surveillance solutions are designed to strengthen national security with precision and reliability. From real-time monitoring to threat detection, we integrate cutting-edge technologies to ensure complete situational awareness. Hyperspectral imaging, AI analytics, and satellite data empower defense forces to identify hidden threats and make faster decisions. We deliver intelligence that protects borders, assets, and lives.`,
  },
  {
    title: "Ocean Net",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/46faf5a2fa5b4c6392659eaf48c4ad8540804c04?width=978",
    desc: `Ocean Net is designed to make oceans smarter and safer by mapping underwater resources with advanced sensing technology. It helps fishermen locate fish more efficiently, identifies rocks and obstacles for safe boating, and monitors marine activity in real time. By combining satellite data and AI, Ocean Net ensures both livelihood support and maritime safety. Together, we move toward a secure and sustainable blue planet.`,
  },
  {
    title: "Farm Scan",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    desc: `Farm Scan brings intelligence to agriculture with advanced imaging and data-driven insights. By analyzing soil, crops, and water conditions, it helps farmers detect issues early and boost productivity. From monitoring plant health to optimizing resources, Farm Scan empowers precision farming with ease. Smarter farms today mean a more sustainable future for tomorrow.`,
  },
  {
    title: "Sky Vision",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    desc: `Unlocks new possibilities in aerial monitoring and exploration. With advanced imaging and real-time data, it enables precise observation of landscapes, weather patterns, and critical missions.`,
  },
  {
    title: "Traffic Sense 360",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    desc: `Traffic Sense 360 delivers a complete 360° view of roads with real-time monitoring and smart insights. It helps reduce congestion, prevent accidents, and improve traffic flow. Designed for modern cities, it ensures safer and more efficient mobility for everyone.`,
  },
  {
    title: "Mineris",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    desc: "Resource mapping and mineral exploration with advanced sensors.",
  },
  {
    title: "Eco Watch",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/44d47a5d1658608c03887f3ffd188776125c7cf4?width=1051",
    desc: "Track environmental changes and support conservation efforts.",
  },
  {
    title: "OceanNet",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/46faf5a2fa5b4c6392659eaf48c4ad8540804c04?width=978",
    desc: "Comprehensive ocean monitoring for research and industry.",
  },
];

const Solution = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    setIsAnimating(true);
  };

  const closeModal = () => {
    setIsAnimating(false);
    // Delay hiding the modal to allow close animation to complete
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedItem(null);
    }, 200);
  };

  return (
  <div className="min-h-screen w-full bg-black text-white">
    <Navbar />
    {/* Hero Section */}
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
          <span className="text-white font-medium">Our Solution</span>
        </nav>
        <h1 className="text-2xl md:text-4xl font-semibold font-reem text-white drop-shadow-lg">
          Our Solution
        </h1>
      </div>
    </div>
    <section className="relative w-full flex flex-col items-center justify-center bg-[#030712] py-24 px-4 overflow-hidden">
      {/* Background stars and subtle glow */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/b8b9acf6016a95d32435be71013b40ab7f911b8c?width=3760" 
          alt="Star field background"
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1320px] min-h-[420px] flex flex-col justify-center px-4 md:px-8">
        {/* Centered Heading and CTA */}
        <div className="w-full flex flex-col items-center justify-center mb-10 md:mb-14 relative">
          <h2 className="font-reem text-[28px] md:text-[32px] lg:text-[36px] font-normal uppercase text-white leading-tight tracking-wide text-center">
            VIDEO BASED EARTH OBSERVATION
          </h2>
          <p className="font-inter text-[12px] md:text-[13px] text-white/90 mt-2 md:mt-3 max-w-[600px] text-center">
            Break barriers in space. Unlock reliable, sustainable satellite operations.
          </p>
          {/* CTA Button in right corner, absolutely positioned */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
            <button className="border border-[#FEC053]/30 px-5 py-2.5 rounded-[6px] text-white font-inter text-[12px] hover:bg-[#FEC053]/10 transition-all shadow-[0_2px_8px_0_rgba(254,192,83,0.10)]">
              Explore Full Archive
            </button>
          </div>
        </div>
        
        {/* Horizontally scrollable cards with invisible scrollbar */}
        <div className="w-full relative">
          <style>
            {`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .solution-card {
                border: 1.5px solid rgba(254,192,83,0.18);
                background: linear-gradient(180deg, #181A20 60%, #101214 100%);
                box-shadow: 0 2px 16px 0 rgba(11,255,211,0.04);
                transition: border 0.3s, box-shadow 0.3s;
              }
              .solution-card:hover, .solution-card:focus-visible {
                border: 1.5px solid rgba(254,192,83,0.55);
                box-shadow: 0 0 0 2px rgba(254,192,83,0.25), 0 8px 32px 0 rgba(11,255,211,0.10);
              }
              .solution-card .view-details-btn {
                background: transparent;
                color: #fff;
                border: 2px solid #bfa84a;
                border-radius: 12px;
                transition: 
                  background 0.2s,
                  color 0.2s,
                  border-color 0.2s;
                box-shadow: none;
              }
              .solution-card:hover .view-details-btn,
              .solution-card:focus-visible .view-details-btn {
                background: linear-gradient(90deg, #0BFFD3 0%, #3070DE 100%);
                color: #fff;
              }
            `}
          </style>
          <div
            className="flex gap-8 overflow-x-auto pb-2 hide-scrollbar"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE/Edge
            }}
          >
            {items.slice(0, 9).map((it, idx) => (
              <a
                key={idx}
                href="#"
                tabIndex={0}
                className="solution-card group relative rounded-[18px] overflow-hidden min-w-[340px] max-w-[370px] w-[90vw] sm:w-[370px] min-h-[390px] flex-shrink-0 flex flex-col"
                style={{
                  height: "390px",
                  scrollSnapAlign: "start",
                }}
              >
                {/* Card image */}
                <div className="w-full h-[180px] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
                {/* Card content */}
                <div className="flex flex-col flex-1 px-7 py-6">
                  <h3 className="font-reem text-[20px] text-white font-normal leading-tight mb-2">
                    {it.title}
                  </h3>
                  <p className="font-inter text-[15px] text-gray-300 leading-[1.6] mb-6 line-clamp-3">
                    {it.desc}
                  </p>
                  <div className="mt-auto flex items-end justify-end">
                    <button
                      onClick={() => openModal(it)}
                      className="view-details-btn px-6 py-2 rounded-[8px] text-white font-inter text-[15px] shadow-md transition-all duration-200 focus:outline-none"
                      style={{
                        boxShadow: "0 2px 12px 0 rgba(11,255,211,0.10)",
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden text-center">
          <button className="border border-[#FEC053]/30 px-5 py-2.5 rounded-[6px] text-white font-inter text-[12px] hover:bg-[#FEC053]/10 transition-all shadow-[0_2px_8px_0_rgba(254,192,83,0.10)]">
            Explore Full Archive
          </button>
        </div>
      </div>
    </section>

    {/* DATA CENTER IN SPACE Section */}
    <section className="relative w-full py-20 px-4 overflow-hidden">
      {/* Subtle black gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="font-reem text-4xl md:text-5xl lg:text-6xl font-normal uppercase text-white tracking-wider">
            Varsha.AI <br className="hidden md:block" />
            <span className="block text-lg md:text-2xl font-inter font-light normal-case tracking-normal mt-2">
              Space-Based Data Center
            </span>
          </h2>
        </div>

        {/* Main Content Container */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600/30 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Section - Centered Layout */}
            <div className="flex flex-col items-center text-center space-y-6 w-full">
              {/* VARSHA.AI Header */}
              <div className="w-full">
                <h3 className="font-reem text-[2.2rem] md:text-[2.7rem] font-normal uppercase text-white tracking-wide mb-4 leading-tight" style={{letterSpacing: "0.08em"}}>
                  Varsha.AI
                </h3>
                {/* Horizontal line separator */}
                <div className="w-full h-px bg-gray-400/50 mb-6"></div>
              </div>
              
              {/* Orange Banner Button - matches line width */}
              <div className="w-full flex justify-center">
                <div className="w-full">
                  <div
                    className="flex items-center justify-center rounded-[8px] bg-[#D6891A] text-white font-inter font-semibold text-[1.35rem] md:text-[1.35rem] uppercase tracking-wide shadow-lg"
                    style={{
                      height: "52px",
                      minHeight: "52px",
                      maxHeight: "52px",
                      letterSpacing: "0.03em",
                      width: "100%",
                    }}
                  >
                    Space-Based Data Center
                  </div>
                </div>
              </div>
              
              {/* Description Content */}
              <div className="text-white/90 font-inter text-sm md:text-base leading-relaxed space-y-4 text-left w-full">
                <p>
                  Varsha.AI is Spaceman Craft’s AI-powered platform designed for space-based data processing and satellite operations. It ensures efficient, reliable, and sustainable management of data, supporting humanity’s journey into space and the future of lunar computing.
                </p>
              </div>
            </div>

            {/* Right Section - Wavy Graphic */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Wavy circular graphic */}
                <svg
                  viewBox="0 0 400 400"
                  className="absolute inset-0 w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="wavyGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#14B8A6" />
                    </radialGradient>
                  </defs>
                  
                  {/* Multiple wavy circles */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <circle
                      key={i}
                      cx="200"
                      cy="200"
                      r={120 + i * 15}
                      fill="none"
                      stroke="url(#wavyGradient)"
                      strokeWidth="2"
                      opacity="0.6"
                      className="animate-pulse"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '3s',
                      }}
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="0 200 200;360 200 200"
                        dur={`${8 + i}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  ))}
                  
                  {/* Central wavy pattern */}
                  <path
                    d="M 200 80 Q 280 120 320 200 Q 280 280 200 320 Q 120 280 80 200 Q 120 120 200 80 Z"
                    fill="url(#wavyGradient)"
                    opacity="0.3"
                    className="animate-pulse"
                  />
                  
                  {/* Additional wavy elements */}
                  <path
                    d="M 200 100 Q 260 140 300 200 Q 260 260 200 300 Q 140 260 100 200 Q 140 140 200 100 Z"
                    fill="none"
                    stroke="url(#wavyGradient)"
                    strokeWidth="3"
                    opacity="0.8"
                  />
                </svg>
                
                {/* VARSHA.AI text in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h4 className="font-reem text-2xl md:text-3xl font-normal uppercase text-cyan-400 tracking-wider">
                    Varsha.AI
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Map Section */}
   
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
            It paves the way for human exploration across Earth’s orbit and beyond, making space travel more affordable and
            accessible than ever before.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-base font-semibold">Navigate</h3>
            <ul className="space-y-2 text-sm text-white/85">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/ourproduct" className="hover:text-white">Product</a></li>
              <li><a href="#solution" className="hover:text-white">Solution</a></li>
              <li><a href="#vision" className="hover:text-white">Vision</a></li>
              <li><a href="blog" className="hover:text-white">Blog</a></li>
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

    {/* Modal Overlay */}
    {isModalOpen && selectedItem && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Dark semi-transparent background */}
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-200 ${
            isAnimating ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeModal}
        />
        
        {/* Modal Content */}
        <div className={`relative z-10 w-[95vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] max-w-3xl h-[90vh] sm:h-[80vh] md:h-[70vh] lg:h-[60vh] max-h-[500px] bg-gray-800/95 rounded-lg border border-gray-600/30 overflow-hidden shadow-2xl transition-all duration-200 transform ${
          isAnimating 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4'
        }`}>
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 z-20 w-6 h-6 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-200 hover:scale-110 active:scale-95"
          >
            ×
          </button>
          
          {/* Modal Content Layout */}
          <div className="flex flex-col md:flex-row h-full">
            {/* Left Side - Image */}
            <div className="w-full md:w-2/5 h-48 sm:h-56 md:h-full p-3 sm:p-4">
              <img
                src={selectedItem.img}
                alt={selectedItem.title}
                className="w-full h-full object-cover object-center rounded-lg"
                draggable={false}
              />
            </div>
            
            {/* Right Side - Content */}
            <div className="w-full md:w-3/5 p-3 sm:p-4 flex flex-col">
              {/* Title */}
              <h3 className="font-reem text-base sm:text-lg md:text-xl font-normal uppercase text-white mb-2 sm:mb-3 tracking-wide">
                {selectedItem.title}
              </h3>
              
              {/* Description */}
              <div className="text-white/90 font-inter text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1">
                <p className="text-justify">
                  {selectedItem.desc}
                </p>
              </div>
              
              {/* Bottom Section with Buttons */}
              <div className="mt-auto">
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95">
                    Orbital Velocity ~0.5 m/s
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95">
                    Altitude ~100-200 km
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  );
};

export default Solution;
