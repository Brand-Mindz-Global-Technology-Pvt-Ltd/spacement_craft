import { useState, useEffect, useRef, forwardRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EarthCanvas from "./EarthCanvas";
import HeroContent from "./HeroContent";
import Navbar from "../components/Navbar";
import ScrollFloat from "../components/ui/ScrollFloat";

// --- Always show Navbar at the top, outside the scrollable hero container ---

const Hero = () => {
  return (
    // This section is now just a container for the content overlay.
    // The height of 100vh ensures it takes up the full screen, acting as a scroll trigger.
    <section className="relative w-full h-screen">
      {/* Navbar is now outside, so remove it here */}
      <HeroContent />
    </section>
  );
};

export const OurProductSection = ({ revealProgress = 0 }: { revealProgress?: number }) => {
  
  // All your existing text animation logic is preserved.
  const p1Progress = revealProgress;
  const p1TranslateY = (1 - p1Progress) * 20;

  const p2Progress = Math.max(0, Math.min(1, (revealProgress - 0.1) / 0.9));
  const p2TranslateY = (1 - p2Progress) * 20;

  // This master opacity will control both the satellite and the moon.
  const imageOpacity = revealProgress;
  // Subtle scale-up animation for the satellite.
  const imageScale = 1.0 + revealProgress * 0.1;
  // Subtle slide-in animation for the moon.
  const moonTranslate = (1 - revealProgress) * 50;

  return (
    <section className="relative w-full h-screen">
      
      {/* 1. TEXT CONTENT (on top) */}
      <div className="relative z-20 flex flex-col items-center w-full px-4 pt-20 md:pt-8">
        <ScrollFloat
          progress={revealProgress}
          tag="h1"
          containerClassName="text-white text-[32px] md:text-[38px] lg:text-[44px] font-normal font-reem text-center tracking-wide mb-3"
        >
          OUR PRODUCT
        </ScrollFloat>

        <p
          className="max-w-[420px] text-center text-white/90 text-xs md:text-sm font-inter mb-2 leading-relaxed"
          style={{ opacity: p1Progress, transform: `translateY(${p1TranslateY}px)` }}
        >
          Electric Thruster System
        </p>

        <p
          className="max-w-[600px] text-center text-white/90 text-xs md:text-sm font-inter mb-5 leading-relaxed"
          style={{ opacity: p2Progress, transform: `translateY(${p2TranslateY}px)` }}
        >
          The Electric Thruster System by Spaceman Craft Pvt Ltd provides compact, efficient, and sustainable propulsion for satellites and spacecraft. It extends mission life while reducing costs and supporting orbital sustainability.
        </p>
      </div>

      {/* 2. SATELLITE IMAGE (centered, behind text) */}
      <div 
        className="absolute inset-0 z-10 flex justify-center items-center pointer-events-none"
        style={{ opacity: imageOpacity }}
      >
        <img
          src="/satellite-.png"
          alt="Spaceman Craft Satellite"
          // Responsive sizing: small on mobile, larger on desktop
          className="w-auto h-auto max-w-[320px] md:max-w-[600px] lg:max-w-[900px] mt-24 md:mt-12"
          style={{
            transform: `scale(${imageScale})`,
            transformOrigin: 'center center',
          }}
        />
      </div>

      {/* 3. MOON IMAGE (top right, behind text) */}
      {/* <div 
        className="absolute inset-0 z-0 flex justify-end items-start pointer-events-none"
        style={{ opacity: imageOpacity }}
      >
        <img
          src="/moon.png"
          alt="Moon"
          // Responsive sizing and positioning
          className="w-auto h-auto max-w-[120px] md:max-w-[180px] lg:max-w-[250px] mt-10 mr-5 md:mt-16 md:mr-16"
          style={{
            transform: `translate(${moonTranslate}px, -${moonTranslate}px)`,
          }}
        />
      </div> */}
      
    </section>
  );
};
import { useNavigate } from "react-router-dom";

const VideoObservationSection = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<null | { title: string; img: string; desc: string }>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const openModal = (item: { title: string; img: string; desc: string }) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    setIsAnimating(true);
  };
  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedItem(null);
    }, 200);
  };
  const items = [
    {
      title: "Hyperspectral Vision",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/44d47a5d1658608c03887f3ffd188776125c7cf4?width=1051",
      desc: "Our Hyperspectral Vision technology captures light across hundreds of spectral bands, revealing details invisible to the human eye. It enables precise material identification, advanced imaging, and deeper insights across industries such as agriculture, environmental monitoring, defense, and space exploration. By analyzing every wavelength, we turn complex data into actionable intelligence. Experience a new dimension of vision where every detail matters.",
    },
    {
      title: "Defense Surveillance",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/3f1e84217d78a591e5fe172b0a9b8d3029537341?width=1009",
      desc: "Advanced surveillance solutions are designed to strengthen national security with precision and reliability. From real-time monitoring to threat detection, we integrate cutting-edge technologies to ensure complete situational awareness. Hyperspectral imaging, AI analytics, and satellite data empower defense forces to identify hidden threats and make faster decisions. We deliver intelligence that protects borders, assets, and lives.",
    },
    {
      title: "OceanNet",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/46faf5a2fa5b4c6392659eaf48c4ad8540804c04?width=978",
      desc: "Ocean Net is designed to make oceans smarter and safer by mapping underwater resources with advanced sensing technology. It helps fishermen locate fish more efficiently, identifies rocks and obstacles for safe boating, and monitors marine activity in real time. By combining satellite data and AI, Ocean Net ensures both livelihood support and maritime safety. Together, we move toward a secure and sustainable blue planet.",
    },
  ];

  return (
    <section className="relative w-full min-h-[700px] flex justify-center items-center bg-[#030712] overflow-hidden">
    {/* Background stars and glow */}
    <div className="absolute inset-0 pointer-events-none select-none">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/b8b9acf6016a95d32435be71013b40ab7f911b8c?width=3760"
        alt="Star field"
        className="w-[1880px] h-[1354px] absolute left-5 -top-[199px]"
        draggable={false}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute left-[196px] top-[275px] w-[531px] h-[513px] rounded-full bg-[#0BFFD3] opacity-30 blur-[200px]" />
    </div>

    <div className="relative z-10 w-full max-w-[1320px] min-h-[700px] flex flex-col justify-center px-4 md:px-8">
      {/* Centered Heading and CTA */}
      <div className="w-full flex flex-col items-center justify-center mb-10 md:mb-14 relative">
        <h2 className="font-reem text-[28px] md:text-[32px] lg:text-[36px] font-normal uppercase text-white leading-tight tracking-wide text-center">
          VIDEO BASED EARTH OBSERVATION
        </h2>
        <p className="font-inter text-[12px] md:text-[13px] text-white/90 mt-2 md:mt-3 max-w-[600px] text-center">
          We develop advanced video observation technologies that provide deeper insights  
          across land, defense, and ocean domains.
        </p>
        {/* CTA Button in right corner, absolutely positioned */}
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
          <button
            className="border border-[#FEC053]/30 px-5 py-2.5 rounded-[6px] text-white font-inter text-[12px] hover:bg-[#FEC053]/10 transition-all shadow-[0_2px_8px_0_rgba(254,192,83,0.10)]"
            onClick={() => navigate("/solution")}
          >
            Explore Full Archive
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center md:items-stretch">
        {items.map((it, idx) => (
          <a
            key={idx}
            href="#"
            className="group relative bg-transparent rounded-[12px] overflow-hidden transition w-full max-w-[400px] min-w-[320px] min-h-[380px] shadow-none"
            style={{
              height: "380px",
            }}
            tabIndex={-1}
            aria-hidden="true"
            onClick={e => e.preventDefault()}
            >
            {/* Background layer below image (does not affect image brightness) */}
            <div className="absolute inset-0 rounded-[12px] bg-black transition-colors duration-300 group-hover:bg-gray-700/50 pointer-events-none z-0" />
            {/* Edge/border accents above image */}
            <div className="absolute inset-0 rounded-[12px] border border-[#FEC053]/10 transition-all duration-300 pointer-events-none z-20">
              {/* Decorative edge highlights on hover: top-left (horizontal) and bottom-right (vertical) */}
              <div
                className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] w-2/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-[12px]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(254,192,83,0.9) 0%, rgba(254,192,83,0.0) 100%)",
                }}
              />
              {/* New: Top-left vertical down accent */}
              <div
                className="pointer-events-none absolute top-0 left-0 w-[2px] h-2/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-[12px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(254,192,83,0.9) 0%, rgba(254,192,83,0.0) 100%)",
                }}
              />
              
              <div
                className="pointer-events-none absolute bottom-0  right-0  w-[2px] h-2/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-[12px]"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(254,192,83,0.9) 0%, rgba(254,192,83,0.0) 100%)",
                }}
              />
              {/* New: Top-right horizontal accent (towards center) */}
              <div
                className="pointer-events-none absolute bottom-0 right-0 h-[2px] w-2/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-[12px]"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(254,192,83,0.9) 0%, rgba(254,192,83,0.0) 100%)",
                }}
              />
            </div>
            <div className="relative flex flex-col h-full z-10">
              <div
                className=" w-full overflow-hidden  "
                style={{ height: "200px" }}
              >
                <img
                  src={it.img}
                  alt={it.title}
                  className="w-full h-full object-cover block"
                  draggable={false}
                />
              </div>
              <div className="px-4">
              <h3 className="mt-4 font-reem text-[20px] text-white font-normal leading-tight">
                {it.title}
              </h3>
              <p className="mt-2 font-inter text-[13px] leading-[1.5] text-gray-300 line-clamp-3">
                {it.desc}
              </p>
              </div>
              <div className="mt-auto flex items-end p-4">
                <button
                  type="button"
                  onClick={() => openModal(it)}
                  className="inline-flex items-center justify-center rounded-[6px] border border-[#FEC053]/30 px-4 py-1.5 text-white text-[11px] font-inter transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#0BFFD3] group-hover:to-[#3070DE] group-hover:border-[#FFD7004D] group-hover:shadow-[0_8px_20px_rgba(11,255,211,0.25)] ml-auto"
                >
                  View Details
                </button>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Modal Overlay (Solution-style, smaller) */}
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
            onClick={e => e.stopPropagation()}
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
            </div>
          </div>
        </div>
      )}

      {/* Mobile CTA */}
      <div className="mt-8 md:hidden text-center">
        <button
          className="border border-[#FEC053]/30 px-5 py-2.5 rounded-[6px] text-white font-inter text-[12px] hover:bg-[#FEC053]/10 transition-all shadow-[0_2px_8px_0_rgba(254,192,83,0.10)]"
          onClick={() => navigate("/solution")}
        >
          Explore Full Archive
        </button>
      </div>
    </div>
  </section>
  );
};

export const VisionStatementSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[1400px] flex items-stretch overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Background image as a true background, not an <img> */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center pointer-events-none select-none"
        style={{
          backgroundImage: "url('/assets/VisionBg.png')",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Top gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-start w-full h-full px-4"
        style={{ paddingTop: "80px" }}
      >
        <h1 className="font-reem text-white text-[32px] md:text-[38px] lg:text-[44px] font-normal text-center tracking-wide mb-3">
          OUR VISION
        </h1>
        <p className="max-w-[700px] text-center text-white/90 text-xs md:text-sm font-inter mb-5 leading-relaxed">
        Our vision is to land on the Moon powered by our electric thruster 
        </p>
      </div>
    </section>
  );
};

export const VarshaAISection = (): JSX.Element => { 
  const navigate = useNavigate();
  return (
    <section className="relative w-full min-h-[700px] flex items-stretch overflow-hidden" style={{ minHeight: "110vh" }}>
      {/* Background image as a true background, not an <img> */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center pointer-events-none select-none "
        style={{
          backgroundImage: "url('/assets/Varsha ai.png')",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Top gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-start w-full h-full px-4"
        style={{ paddingTop: "80px" }}
      >
        <h1 className="font-reem text-white text-[32px] md:text-[38px] lg:text-[44px] font-normal text-center tracking-wide mb-3">
          VARSHA.AI
        </h1>
        <p className="max-w-[600px] text-center text-white/90 text-xs md:text-sm font-inter mb-5 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a
          href="https://varsha.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-1.5 rounded bg-transparent border border-white text-white text-xs md:text-sm font-inter transition-all duration-300 hover:border-[#FFD7004D] hover:bg-gradient-to-r hover:from-[#0BFFD3] hover:to-[#3070DE] hover:text-white inline-block"
        >
          <span className="shiny-text">Explore Now</span>
        </a>
      </div>
    </section>
  );
};

export const GoingToTheMoonSection = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full min-h-[700px] flex items-stretch overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Background image as a true background, not an <img> */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center pointer-events-none select-none"
        style={{
          backgroundImage: "url('/assets/GoingToMoon.png')",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Top gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-start w-full h-full px-4"
        style={{ paddingTop: "80px" }}
      >
        <h1 className="font-reem text-white text-[32px] md:text-[38px] lg:text-[44px] font-normal text-center tracking-wide mb-3">
          GOING TO THE MOON
        </h1>
        <p className="max-w-[420px] text-center text-white/90 text-xs md:text-sm font-inter mb-5 leading-relaxed">
        From Earth to Moon — powered by innovation in propulsion 
        </p>
        <Button
          variant="outline"
          className="px-5 py-1.5 rounded bg-transparent border border-white text-white text-xs md:text-sm transition-colors hover:bg-gradient-to-r hover:from-[#0BFFD3] hover:to-[#3070DE] hover:text-white hover:border-[#FFD7004D]"
          onClick={() => {
            navigate("/vission?target=going-to-moon");
          }}
        >
          Explore Now
        </Button>
      </div>
    </section>
  );
};  

export const DataCenterSection = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full min-h-[700px] flex items-stretch overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Background image as a true background, not an <img> */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center pointer-events-none select-none"
        style={{
          backgroundImage: "url('/assets/10-data-center-moon.jpg')",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Top gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-start w-full h-full px-4"
        style={{ paddingTop: "80px" }}
      >
        <h1 className="font-reem text-white text-[32px] md:text-[38px] lg:text-[44px] font-normal text-center tracking-wide mb-3">
        Data Centers in Moon and Space 
        </h1>
        <p className="max-w-[420px] text-center text-white/90 text-xs md:text-sm font-inter mb-5 leading-relaxed">
        Redefining the Future of Computing
        </p>
        <Button
          variant="outline"
          className="px-5 py-1.5 rounded bg-transparent border border-white text-white text-xs md:text-sm transition-colors hover:bg-[#0BFFD3] hover:text-white hover:border-[#0BFFD3]"
          onClick={() => {
            navigate("/vission");
            // Scroll to the DATA CENTER IN SPACE card after navigation
            setTimeout(() => {
              const element = document.getElementById("data-center-space");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }, 100);
          }}
        >
          Explore Now
        </Button>
      </div>
    </section>
  );
};

export const SpaceTourismSection = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full min-h-[700px] flex items-stretch overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Background image as a true background, not an <img> */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center pointer-events-none select-none"
        style={{
          backgroundImage: "url('/assets/11-space-tourism.jpg')",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Top gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-start w-full h-full px-4"
        style={{ paddingTop: "80px" }}
      >
        <h1 className="font-reem text-white text-[32px] md:text-[38px] lg:text-[46px] font-normal text-center tracking-wide ">
          Space Tourism 
        </h1>
        <h3 className="font-reem text-white text-[32px] md:text-[38px] lg:text-[30px] font-normal text-center tracking-wide mb-3">
        Making the Universe Your Next Destination
        </h3>
        <p className="max-w-[820px] text-center text-white/90 text-xs md:text-sm font-inter mb-5 leading-relaxed">
          We believe space is not just for astronauts — it’s for everyone.
          Space tourism is the next leap in human exploration, where ordinary people experience the extraordinary wonders of the cosmos.
        </p>
        <Button
          variant="outline"
          className="px-5 py-1.5 rounded bg-transparent border border-white text-white text-xs md:text-sm transition-colors hover:bg-[#0BFFD3] hover:text-black hover:border-[#0BFFD3]"
          onClick={() => {
            navigate("/vission");
            // Scroll to the SPACE TOURISM card after navigation
            setTimeout(() => {
              const element = document.getElementById("space-tourism");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }, 100);
          }}
        >
          Explore Now
        </Button>
      </div>
    </section>
  );
};



const BlogsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-black py-20 md:py-24 overflow-hidden">
      {/* Subtle center glow */}
      <div className="pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[#0BFFD3] opacity-20 blur-[140px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-reem text-3xl md:text-4xl font-normal text-white leading-tight mb-3">
            The Blogs
          </h2>
          <p className="font-inter text-sm md:text-base text-gray-300 max-w-[780px] mx-auto leading-6">
            A blog is like your brand's personal journal — but online, public, and
            packed with valuable content that educates, inspires, or connects with
            your audience.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Featured */}
          <div className="lg:col-span-5">
            <div
              className="group relative bg-gradient-to-br from-[#23272F] to-[#181A20] border border-[#0BFFD3] rounded-2xl shadow-xl overflow-hidden transition-colors duration-200"
              style={{
                // Always show the left border with #0BFFD3, and on hover, all borders get #0BFFD3
                borderLeftColor: "#0BFFD3",
                borderLeftWidth: "2px",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              {/* Green glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0BFFD3]/30 via-transparent to-transparent blur-2xl" />
              </div>
              <div className="relative w-full h-[240px] sm:h-[260px] z-10">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8d131cf968ba9d25f16ec41d57b7bf0809d4b910?width=1420"
                  alt="Total Lunar Eclipse Gala"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-[#23272F]/80 px-3 py-[6px] rounded-full text-white text-[11px] font-inter">
                  Featured Event
                </span>
              </div>

              <div className="relative p-5 sm:p-6 z-10 transition-colors duration-200 group-hover:bg-gradient-to-br group-hover:from-[#0BFFD3]/10 group-hover:to-[#23272F]/60">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-reem text-lg sm:text-xl text-white">
                    Total Lunar Eclipse Gala
                  </h3>
                  <div className="text-right">
                    <p className="text-gray-400 text-xs leading-none mb-1">
                      Date
                    </p>
                    <p className="text-white text-xs sm:text-[13px] leading-none">
                      October 14, 2025
                    </p>
                  </div>
                </div>

                <p className="font-inter text-xs text-gray-300 leading-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Risus commodo viverra maecenas accumsan lacus vel facilisis.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>

                <div className="mt-4 flex justify-end">
                  <button
                    className="bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] px-4 py-1.5 rounded-lg text-white font-inter text-xs border border-yellow-400/30 hover:from-[#0DF7D4]/85 hover:to-[#2C7BDC]/85 transition"
                    onClick={() => navigate("/blog")}
                  >
                    Explore more
                  </button>
                </div>
              </div>
              {/* On hover, make all borders #0BFFD3 */}
              <style>
                {`
                  .group:hover {
                    border-color: #0BFFD3 !important;
                  }
                `}
              </style>
            </div>
          </div>

          {/* Side list */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {[
              { date: "May 22-25, 2025" },
              { date: "August 11-13, 2025" },
              { date: "September 5, 2025" },
            ].map((item, i) => (
              <div
                key={i}
                className={`
                  group bg-[#181A20]/85 border border-yellow-400/10 rounded-2xl p-5 shadow backdrop-blur-sm transition-colors duration-200
                  hover:border-[#0BFFD3]
                  hover:bg-gradient-to-br hover:from-[#0BFFD3]/15 hover:to-[#181A20]/80
                  relative
                `}
              >
                {/* Green glow on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0BFFD3]/25 via-transparent to-transparent blur-2xl" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-reem text-base md:text-lg text-white">
                      Total Lunar Eclipse Gala
                    </h3>
                    <p className="text-gray-400 text-xs leading-none">
                      {item.date}
                    </p>
                  </div>

                  <p className="font-inter text-xs md:text-sm text-gray-300 leading-5 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  <div className="mt-4 flex justify-end">
                    <button
                      className="border border-yellow-400/30 px-3 py-1 rounded-lg text-gray-200 font-inter text-xs hover:bg-white hover:text-black transition"
                      onClick={() => navigate("/blogpage")}
                    >
                      Read
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative bg-black w-full min-h-screen flex items-stretch overflow-hidden"
      style={{ maxWidth: "100vw" }}
    >
      {/* Left Side: Astronaut Image, fills left half */}
      <div className="relative hidden lg:flex w-1/2 h-screen flex-shrink-0 items-center justify-end overflow-hidden">
        <div className="relative h-[98vh] w-full flex items-center justify-end">
          <img
            src="/assets/Spaceman.png"
            alt="Spaceman"
            className="block h-[98vh] w-auto object-contain object-left"
            style={{
              marginLeft: "-10vw", // Pull image left for dramatic effect, adjust as needed
              zIndex: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
      </div>

      {/* Right Side: Content, fills right half, centers content */}
      <div
        className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16 lg:py-0 min-h-screen"
        style={{ maxWidth: "700px", marginLeft: "auto" }}
      >
        <div className="max-w-xl w-full">
          <h2 className="font-reem text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
            About Spaceman Craft
          </h2>

          <p className="font-inter text-sm md:text-base text-white/80 leading-relaxed mb-8">
            We are a team of innovators, engineers, and dreamers working together to 
            redefine the future of space technology. From electric propulsion systems to CubeSats 
            and lunar data centers, our projects are built to advance how humanity explores, 
            communicates, and thrives in space. 
          </p>
          <button
            type="button"
            className="inline-block border border-white px-5 py-2 rounded text-white font-inter text-sm hover:bg-white hover:text-black transition-all"
            onClick={() => {
              navigate("/about");
            }}
          >
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
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
        <img
          src="/assets/01-logo.jpg"
          alt="Spacemancraft"
          className="mx-auto mb-4 h-10 w-auto"
        />
        <p className="text-sm leading-relaxed text-white/80">
          A revolutionary blend of spacecraft and passenger vehicle, powered by
          cost‑effective solar electric propulsion. It paves the way for human
          exploration across Earth’s orbit and beyond, making space travel more
          affordable and accessible than ever before.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-base font-semibold">Navigate</h3>
          <ul className="space-y-2 text-sm text-white/85">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/product" className="hover:text-white">
                Product
              </a>
            </li>
            <li>
              <a href="/solution" className="hover:text-white">
                Solution
              </a>
            </li>
            <li>
              <a href="#vision" className="hover:text-white">
                Vision
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About us
              </Link>
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
              <a
                href="mailto:spacemancraftindia@gmail.com"
                className="hover:text-white"
              >
                spacemancraftindia@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-base font-semibold">Enquire Now</h3>
          <button
            className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-2.5 text-sm font-medium text-black shadow-[0_0_35px_rgba(56,189,248,0.45)] transition hover:from-cyan-300 hover:to-blue-500"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Discover Our Thruster
          </button>
        </div>
      </div>

      <div className="mt-12 border-t border-white/20 pt-4 text-xs text-white/70 md:flex md:items-center md:justify-between">
  <p>
          Copyright © 2025 Spacemancraft Made with <span role="img" aria-label="love">❤️</span> by{" "}
          <a
            href="https://www.brandmindz.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-white"
          >
            Brand Mindz
          </a>{" "}
          | All rights reserved
        </p>        <div className="mt-3 flex gap-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Refund Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function Index() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollDurationInScreens = 7;

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const { top } = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollableDistance = windowHeight * (scrollDurationInScreens - 1);
      const progress = Math.max(0, Math.min(1, -top / scrollableDistance));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDurationInScreens]);

  // --- CENTRALIZED TIMING LOGIC ---
  const heroOpacity = Math.max(0, Math.min(1, (0.1 - scrollProgress) / 0.1));

  // This is the master timing control for the entire "Our Product" section reveal.
  // You can adjust this one line to change when everything appears.
  const revealProgress = Math.max(0, Math.min(1, (scrollProgress - 0.3) / 0.3));

  const containerHeight = `${scrollDurationInScreens * 100}vh`;

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar is always visible at the top */}
      <div className="sticky top-0 z-[100] w-full">
        <Navbar />
      </div>
      <div ref={containerRef} className="relative" style={{ height: containerHeight }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <EarthCanvas scrollProgress={scrollProgress} />

          <div
            className="absolute inset-0 z-20"
            style={{
              opacity: heroOpacity,
              pointerEvents: heroOpacity > 0.5 ? "auto" : "none",
            }}
          >
            <Hero />
          </div>

          {/* This wrapper's ONLY job is to handle interactivity. */}
          {/* The component inside will handle its own animations. */}
          <div
            className="absolute inset-0 z-10 flex justify-center items-start pt-28"
            style={{
              pointerEvents: revealProgress > 0.5 ? "auto" : "none",
            }}
          >
            <OurProductSection revealProgress={revealProgress} />
          </div>
        </div>
      </div>

      {/* --- Rest of the page flows normally below the container --- */}
      <VideoObservationSection />
      <VisionStatementSection />
      <VarshaAISection />
      <GoingToTheMoonSection />
      <DataCenterSection />
      <SpaceTourismSection />
      <BlogsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
