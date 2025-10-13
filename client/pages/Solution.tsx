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
  }
 
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
    <section className="relative w-full flex flex-col items-center justify-center bg-[#030712] py-16 md:py-24 px-2 md:px-4 overflow-hidden">
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

      <div className="relative z-10 w-full max-w-[1440px] min-h-[480px] flex flex-col justify-center px-2 md:px-8">
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
                font-size: 12px;
                padding: 0.25rem 1.1rem;
                min-height: 28px;
                min-width: 90px;
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
                className="solution-card group relative rounded-[18px] overflow-hidden min-w-[370px] max-w-[410px] w-[92vw] sm:w-[410px] min-h-[440px] flex-shrink-0 flex flex-col"
                style={{
                  height: "440px",
                  scrollSnapAlign: "start",
                }}
              >
                {/* Card image */}
                <div className="w-full h-[210px] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
                {/* Card content */}
                <div className="flex flex-col flex-1 px-6 py-5">
                  <h3 className="font-reem text-[18px] md:text-[20px] text-white font-normal leading-tight mb-2">
                    {it.title}
                  </h3>
                  <p className="font-inter text-[14px] md:text-[15px] text-gray-300 leading-[1.6] mb-6 line-clamp-3">
                    {it.desc}
                  </p>
                  <div className="mt-auto flex items-end justify-end">
                    <button
                      onClick={() => openModal(it)}
                      className="view-details-btn shadow-md transition-all duration-200 focus:outline-none"
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
        {/* Popup Modal Content */}
        <div
          className={`relative z-10 flex flex-col md:flex-row w-[96vw] max-w-2xl bg-[#23272e] rounded-lg border border-gray-700/60 shadow-2xl overflow-hidden transition-all duration-200 ${
            isAnimating
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-4'
          }`}
          style={{
            minHeight: '320px',
            maxHeight: '90vh',
          }}
        >
          {/* Left: Image */}
          <div className="md:w-[44%] w-full flex-shrink-0 bg-black/60 flex items-center justify-center p-0 md:p-0">
            <img
              src={selectedItem.img}
              alt={selectedItem.title}
              className="w-full h-full object-cover object-center"
              style={{
                minHeight: '220px',
                maxHeight: '350px',
                borderTopLeftRadius: '0.5rem',
                borderBottomLeftRadius: '0.5rem',
              }}
              draggable={false}
            />
          </div>
          {/* Right: Content */}
          <div className="relative flex-1 flex flex-col px-5 py-4 md:py-6 md:px-6">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-20 w-7 h-7  rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Close"
              tabIndex={0}
            >
              ×
            </button>
            {/* Title */}
            <h3 className="font-reem text-lg md:text-xl font-semibold text-white mb-2 tracking-wide">
              {selectedItem.title}
            </h3>
            {/* Description */}
            <div className="text-white/90 font-inter text-xs md:text-sm leading-relaxed mb-4 flex-1 overflow-y-auto pr-1">
              <p className="text-justify whitespace-pre-line">
                {selectedItem.desc}
              </p>
            </div>
            {/* Example: Tag Buttons (if present in item) */}
            {selectedItem.tags && Array.isArray(selectedItem.tags) && (
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedItem.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block bg-blue-700/90 text-white text-xs px-3 py-1 rounded-md font-semibold shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )}
  </div>
  );
};

export default Solution;
