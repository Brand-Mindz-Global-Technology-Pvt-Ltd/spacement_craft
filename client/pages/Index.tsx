import { useState, useEffect, useRef, forwardRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EarthCanvas from "./EarthCanvas";
import HeroContent from "./HeroContent";
import Navbar from "../components/Navbar";
import ScrollFloat from "../components/ui/scroll/ScrollFloat";
import ScrollReveal from "../components/ui/scroll/ScrollReveal";
import DataCenterScrollReveal from "../components/ui/home/DataCenterScrollReveal";
import SpaceTourismScrollReveal from "../components/ui/home/SpaceTourismScrollReveal";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { getPublishedBlogs } from "@/lib/blog/blogService";
import { BlogData } from "@/types/BlogTypes";
import { Skeleton } from "@/components/ui/skeleton";

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
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={0}
          blurStrength={10}
          containerClassName="text-center mb-3"
          textClassName="text-white text-[32px] md:text-[38px] lg:text-[44px] font-normal font-reem tracking-wide"
          manualProgress={p1Progress}
        >
          OUR PRODUCT
        </ScrollReveal>

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
    <section className="relative w-full min-h-[700px] pt-14 lg:pt-0 md:pt-0    flex justify-center items-center bg-[#030712] overflow-hidden">
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

        {/* Semi-Circle Blur Effect (Right Side) - Smaller & Darker */}
        <div
          className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-1/2 w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] bg-indigo-900/60 rounded-full blur-[10px] md:blur-[80px] pointer-events-none z-0"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1320px] min-h-[700px] flex flex-col justify-center px-4 md:px-8">
        {/* Centered Heading and CTA */}
        <div className="w-full flex flex-col items-center justify-center mb-10 md:mb-14 relative">
          <h2 className="font-reem text-[21px] md:text-[38px] lg:text-[44px] font-normal uppercase text-white leading-tight tracking-wide text-center">
            VIDEO BASED EARTH OBSERVATION
          </h2>
          <p className="font-inter text-[12px] md:text-sm text-white/90 mt-2 md:mt-3 max-w-[600px] text-center">
            We develop advanced video observation technologies that provide deeper insights
            across land, defense, and ocean domains.
          </p>
          {/* CTA Button in right corner, absolutely positioned */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
            <button
              className="  border  transition-all duration-300  hover:border-[#FFD7004D] hover:bg-gradient-to-r hover:from-[#0BFFD3] hover:to-[#3070DE] hover:text-white inline-block  border-[#FEC053]/30 px-5 py-2.5 rounded-[6px] text-white font-inter text-xs md:text-sm  shadow-[0_2px_8px_0_rgba(254,192,83,0.10)]"
              onClick={() => navigate("/solution")}
            >
              Explore Full Archive
            </button>
          </div>
        </div>

        {/* Cards - Carousel on mobile, flex-row on desktop */}
        <div className="w-full relative">
          <style>
            {`
              .hide-scrollbar-video::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          <div
            className="w-full flex flex-row gap-6 md:gap-8 justify-start md:justify-center items-center md:items-stretch overflow-x-auto md:overflow-x-visible hide-scrollbar-video pb-2 pl-4 pr-[5vw] md:px-0"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {items.map((it, idx) => (
              <a
                key={idx}
                href="#"
                className="group relative bg-transparent rounded-[12px] overflow-hidden transition w-[90vw] md:w-full md:max-w-[400px] min-w-[320px] min-h-[380px] flex-shrink-0 shadow-none"
                style={{
                  height: "380px",
                  scrollSnapAlign: "start",
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
                    <h3 className="mt-4 font-reem text-[18px] md:text-[20px] lg:text-[22px] text-white font-normal leading-tight">
                      {it.title}
                    </h3>
                    <p className="mt-2 font-inter text-xs md:text-sm leading-[1.5] text-gray-300 line-clamp-3">
                      {it.desc}
                    </p>
                  </div>
                  <div className="mt-auto flex items-end p-4">
                    <button
                      type="button"
                      onClick={() => openModal(it)}
                      className="inline-flex items-center justify-center rounded-[6px] border border-[#FEC053]/30 px-4 py-1.5 text-white text-[10px] md:text-[11px] font-inter transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#0BFFD3] group-hover:to-[#3070DE] group-hover:border-[#FFD7004D] group-hover:shadow-[0_8px_20px_rgba(11,255,211,0.25)] ml-auto"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Modal Overlay (Solution-style, smaller) */}
        {isModalOpen && selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Dark semi-transparent background */}
            <div
              className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-200 ${isAnimating ? 'opacity-100' : 'opacity-0'
                }`}
              onClick={closeModal}
            />
            {/* Popup Modal Content */}
            <div
              className={`relative z-10 flex flex-col md:flex-row w-[96vw] max-w-2xl bg-[#23272e] rounded-lg border border-gray-700/60 shadow-2xl overflow-hidden transition-all duration-200 ${isAnimating
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
                <h3 className="font-reem text-[18px] md:text-[20px] lg:text-[22px] font-semibold text-white mb-2 tracking-wide">
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
            className="border border-[#FEC053]/30 px-5 py-2.5 rounded-[6px] text-white font-inter text-xs md:text-sm hover:bg-[#FEC053]/10 transition-all shadow-[0_2px_8px_0_rgba(254,192,83,0.10)]"
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
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: 0 }}
      >
        <source src="/assets/home/vissonvideo2.mp4" type="video/mp4" />
      </video>

      {/* Top gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-black/0 to-transparent pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-start w-full h-full px-4"
        style={{ paddingTop: "80px" }}
      >
        <h1 className="font-reem text-white text-[23px] md:text-[38px] lg:text-[44px] font-normal text-center tracking-wide mb-3">
          OUR VISION
        </h1>
        <p className="max-w-[700px] text-center text-white/90 text-[12px] md:text-sm font-inter mb-5 leading-relaxed">
          Our vision is to land on the Moon powered by our electric thruster
        </p>
      </div>

    </section>
  );
};

export const VarshaAISection = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section
      className="
    relative w-full flex items-stretch overflow-hidden
    min-h-[80vh]      /* default for desktop */
    md:min-h-[80vh]
    lg:min-h-[120vh]
    sm:min-h-[900px]   /* small screens */
    xs:min-h-[800px]   /* extra small */
  "
    >

      {/* Background image as a true background, not an <img> */}
      <video
        className="absolute inset-0 lg:w-full lg:h-full w-[100%] h-[100%] pt-32 lg:pt-0  object-cover pointer-events-none select-none"
        src="/assets/varshai-ai-animate.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />

      {/* Top gradient overlay */}
      {/* <div
        className="absolute inset-0 bg-gradient-to-b from-black  to-transparent pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      /> */}

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-start w-full h-full px-4"
        style={{ paddingTop: "80px" }}
      >
        <h1 className="font-reem text-white text-[23px] md:text-[38px] lg:text-[44px] font-normal text-center tracking-wide mb-3">
          VARSHA.AI
        </h1>
        <p className="max-w-[600px] text-center text-white/90 text-[12px] md:text-sm font-inter mb-5 leading-relaxed">
          Rain of Space Data Intelligence. Orbital Data Centre Satellites Powered by our electric thrusters
        </p>
        <a
          href="https://varsha.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-1.5 rounded bg-transparent border border-white text-white text-xs md:text-sm font-inter transition-all duration-300 
             hover:bg-gradient-to-b hover:from-[#0BFFD3] hover:via-cyan-400 hover:to-[#316BDE]
             hover:border-transparent hover:text-white 
             hover:shadow-[0_0_35px_rgba(56,189,248,0.45)] hover:scale-[1.03] inline-block"
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
    <section className="relative w-full min-h-[600px] sm:min-h-[700px] md:min-h-[80vh] lg:min-h-[120vh] flex items-stretch overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        x5-playsinline="true"
        preload="auto"
        style={{ zIndex: 0 }}
      >
        <source src="/assets/home/Rocket.mp4" type="video/mp4" />
      </video>

      {/* Top gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-black/5 to-transparent pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="relative flex flex-col items-center justify-start w-full h-full px-4 pt-20 sm:pt-24 md:pt-28 lg:pt-32"
        style={{ zIndex: 10 }}
      >
        <h1 className="font-reem text-white text-[23px] md:text-[38px] lg:text-[44px] font-normal text-center tracking-wide mb-3">
          GOING TO THE MOON
        </h1>
        <p className="max-w-[420px] text-center text-white/90 text-[12px] md:text-sm font-inter mb-5 leading-relaxed">
          From Earth to Moon — powered by innovation in propulsion
        </p>
        <Button
          variant="outline"
          className="
    px-5 py-1.5 rounded bg-transparent border border-white text-white text-xs md:text-sm transition-all duration-300
    hover:bg-gradient-to-b hover:from-[#0BFFD3] hover:via-cyan-400 hover:to-[#316BDE]
    hover:border-transparent hover:text-white
    hover:shadow-[0_0_35px_rgba(56,189,248,0.45)] hover:scale-[1.03]
  "
          onClick={() => {
            navigate('/vission?target=going-to-moon');
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
    <DataCenterScrollReveal backgroundImage="/assets/10-data-center-moon.jpg">
      <h1 className="font-reem text-white text-[23px] md:text-[38px] lg:text-[44px] font-normal text-center tracking-wide mb-3">
        Data Centers in Moon and Space
      </h1>
      <p className="max-w-[420px] text-center text-white/90 text-[12px] md:text-sm font-inter mb-5 leading-relaxed">
        Redefining the Future of Computing
      </p>
      <Button
        variant="outline"
        className="
    px-5 py-1.5 rounded bg-transparent border border-white text-white text-xs md:text-sm 
    transition-all duration-300
    hover:bg-gradient-to-b hover:from-[#0BFFD3] hover:via-cyan-400 hover:to-[#316BDE]
    hover:border-transparent hover:text-white
    hover:shadow-[0_0_35px_rgba(56,189,248,0.45)]
    hover:scale-[1.03]
  "
        onClick={() => {
          navigate('/vission');
          setTimeout(() => {
            const element = document.getElementById('data-center-space');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }}
      >
        Explore Now
      </Button>

    </DataCenterScrollReveal>
  );
};

export const SpaceTourismSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <SpaceTourismScrollReveal backgroundImage="/assets/11-space-tourism.jpg">
      <h1 className="font-reem text-white text-[21px] md:text-[38px] lg:text-[46px] font-normal text-center tracking-wide ">
        Space Tourism
      </h1>
      <h3 className="font-reem text-white text-[18px] md:text-[24px] lg:text-[30px] font-normal text-center tracking-wide mb-3">
        Making the Universe Your Next Destination
      </h3>
      <p className="max-w-[820px] text-center text-white/90 text-xs md:text-sm font-inter mb-5 leading-relaxed">
        We believe space is not just for astronauts — it's for everyone.
        Space tourism is the next leap in human exploration, where ordinary people experience the extraordinary wonders of the cosmos.
      </p>
      <Button
        variant="outline"
        className="
    px-5 py-1.5 rounded bg-transparent border border-white text-white text-xs md:text-sm 
    transition-all duration-300
    hover:bg-gradient-to-b hover:from-[#0BFFD3] hover:via-cyan-400 hover:to-[#316BDE]
    hover:border-transparent hover:text-white
    hover:shadow-[0_0_35px_rgba(56,189,248,0.45)]
    hover:scale-[1.03]
  "
        onClick={() => {
          navigate('/vission');
          setTimeout(() => {
            const element = document.getElementById('space-tourism');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }}
      >
        Explore Now
      </Button>

    </SpaceTourismScrollReveal>
  );
};

const BlogsSection = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasFetched) {
          fetchBlogs();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasFetched]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const data = await getPublishedBlogs();
      // Sort by date latest first and take top 4
      const sorted = data.sort((a, b) => {
        const dateA = new Date(a.date || a.createdAt || 0).getTime();
        const dateB = new Date(b.date || b.createdAt || 0).getTime();
        return dateB - dateA;
      }).slice(0, 4);
      setBlogs(sorted);
      setHasFetched(true);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const featuredBlog = blogs[0];
  const sideBlogs = blogs.slice(1);

  return (
    <section ref={sectionRef} className="relative bg-black py-20 md:py-24 overflow-hidden">
      {/* Subtle center glow */}
      <div className="pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[#0BFFD3] opacity-20 blur-[140px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-reem text-[21px] md:text-[38px] lg:text-[44px] font-normal text-white leading-tight mb-3">
            The Blogs
          </h2>
          <p className="font-inter text-[12px] md:text-sm text-gray-300 max-w-[780px] mx-auto leading-6">
            A blog is like your brand's personal journal — but online, public, and
            packed with valuable content that educates, inspires, or connects with
            your audience.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured */}
          <div className="lg:col-span-5 flex">
            {loading ? (
              <div className="w-full flex flex-col bg-[#181A20] border border-white/5 rounded-2xl overflow-hidden min-h-[500px]">
                <Skeleton className="w-full h-[240px] sm:h-[260px]" />
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/4" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                  <div className="flex justify-end pt-4">
                    <Skeleton className="h-8 w-24 rounded-lg" />
                  </div>
                </div>
              </div>
            ) : featuredBlog ? (
              <div
                className="group relative bg-gradient-to-br from-[#23272F] to-[#181A20] border border-[#0BFFD3] rounded-2xl shadow-xl overflow-hidden transition-colors duration-200 w-full flex flex-col"
                style={{
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
                  {featuredBlog.coverImage ? (
                    <img
                      src={featuredBlog.coverImage}
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="relative w-full h-full flex-shrink-0 rounded-xl bg-gray-900/50 flex items-center justify-center border border-white/5 z-10">
                      <span className="text-gray-600 text-[10px]">No Image</span>
                    </div>
                  )}
                  <span className="absolute top-3 right-3 bg-[#23272F]/80 px-3 py-[6px] rounded-full text-white text-[10px] md:text-[11px] font-inter">
                    {featuredBlog.isFeatured ? 'Featured' : featuredBlog.isCuratedCore ? 'Curated Core' : 'Latest'}
                  </span>
                </div>
                <div className="relative p-5 sm:p-6 z-10 transition-colors duration-200 group-hover:bg-gradient-to-br group-hover:from-[#0BFFD3]/10 group-hover:to-[#23272F]/60 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-reem text-[16px] md:text-[18px] lg:text-[20px] text-white line-clamp-2">
                      {featuredBlog.title}
                    </h3>
                    <div className="text-right flex-shrink-0">
                      <p className="text-gray-400 text-xs leading-none mb-1">
                        Date
                      </p>
                      <p className="text-white text-[10px] md:text-[12px] leading-none">
                        {featuredBlog.date ? new Date(featuredBlog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recent'}
                      </p>
                    </div>
                  </div>

                  <p className="font-inter text-[11px] md:text-xs text-gray-300 leading-5 flex-1 line-clamp-5">
                    {featuredBlog.shortDescription || featuredBlog.content?.replace(/<[^>]*>?/gm, '').slice(0, 200)}
                  </p>

                  <div className="mt-4 flex justify-end">
                    <button
                      className="bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] px-4 py-1.5 rounded-lg text-white font-inter text-[10px] md:text-xs border border-yellow-400/30 hover:from-[#0DF7D4]/85 hover:to-[#2C7BDC]/85 transition"
                      onClick={() => navigate(`/blog/${featuredBlog.slug}`)}
                    >
                      Explore more
                    </button>
                  </div>
                </div>
                <style>
                  {`
                    .group:hover {
                      border-color: #0BFFD3 !important;
                    }
                  `}
                </style>
              </div>
            ) : null}
          </div>

          {/* Side list */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-[#181A20] border border-white/5 rounded-2xl p-5 space-y-3">
                  <div className="flex justify-between">
                    <Skeleton className="h-5 w-1/2" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                  <div className="space-y-1">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-5/6" />
                  </div>
                  <div className="flex justify-end pt-2">
                    <Skeleton className="h-7 w-20 rounded-lg" />
                  </div>
                </div>
              ))
            ) : sideBlogs.length > 0 ? (
              sideBlogs.map((item) => (
                <div
                  key={item.id}
                  className={`
                    group bg-[#181A20]/85 border border-yellow-400/10 rounded-2xl p-5 shadow backdrop-blur-sm transition-colors duration-200
                    hover:border-[#0BFFD3]
                    hover:bg-gradient-to-br hover:from-[#0BFFD3]/15 hover:to-[#181A20]/80
                    relative
                  `}
                >
                  {/* Green Glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0BFFD3]/25 via-transparent to-transparent blur-2xl" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-reem text-[14px] md:text-[16px] lg:text-[18px] text-white line-clamp-1">
                        {item.title}
                      </h3>

                      <div className="flex flex-col items-end gap-1 flex-shrink-0">
                        <span className="bg-[#23272F]/80 px-2 py-[4px] rounded-full text-white text-[10px] font-inter">
                          {item.isFeatured ? 'Featured' : item.isCuratedCore ? 'Curated' : 'Latest'}
                        </span>
                        <p className="text-gray-400 text-[10px] leading-none">
                          {item.date ? new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent'}
                        </p>
                      </div>
                    </div>

                    <p className="font-inter text-xs md:text-sm text-gray-300 leading-5 mt-2 line-clamp-2">
                      {item.shortDescription || item.content?.replace(/<[^>]*>?/gm, '').slice(0, 150)}
                    </p>

                    <div className="mt-4 flex justify-end">
                      <button
                        className="
                          border border-yellow-400/30 px-3 py-1 rounded-lg text-gray-200 font-inter text-[10px] md:text-xs 
                          transition-all duration-300
                          hover:bg-gradient-to-b hover:from-[#0BFFD3] hover:via-cyan-400 hover:to-[#316BDE]
                          hover:text-white
                          hover:border-transparent
                          hover:shadow-[0_0_35px_rgba(56,189,248,0.45)]
                          hover:scale-[1.03]
                        "
                        onClick={() => navigate(`/blog/${item.slug}`)}
                      >
                        Read
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : null}
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
      className="relative bg-black w-full min-h-screen flex flex-col lg:flex-row items-stretch overflow-hidden"
      style={{ maxWidth: "100vw" }}
    >
      {/* Mobile/Tablet: Astronaut Video at top */}
      <div className="relative lg:hidden w-full h-[60vh] md:h-[80vh] flex-shrink-0 overflow-hidden">
        <div className="relative h-full w-full flex items-center justify-center">
          <video
            src="/assets/about/spaceman.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="block w-full h-full object-cover"
            style={{
              zIndex: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />
      </div>

      {/* Desktop: Astronaut Video on left half */}
      <div className="relative hidden lg:flex w-1/2 h-screen flex-shrink-0 items-center justify-end overflow-hidden">
        <div className="relative h-full w-full flex items-center justify-end">
          <video
            src="/assets/about/spaceman.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="block w-full h-full object-cover"
            style={{
              zIndex: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
      </div>

      {/* Content Section */}
      <div
        className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 lg:py-0 min-h-[50vh] lg:min-h-screen"
        style={{ maxWidth: "100%", marginLeft: "auto" }}
      >
        <div className="max-w-xl w-full">
          <h2 className="font-reem text-[21px] md:text-[38px] lg:text-[48px] font-normal text-white leading-tight mb-4">
            About Spaceman Craft
          </h2>

          <p className="font-inter text-[12px] md:text-sm text-white/80 leading-relaxed mb-8">
            We are a team of innovators, engineers, and dreamers working together to
            redefine the future of space technology. From electric propulsion systems to CubeSats
            and lunar data centers, our projects are built to advance how humanity explores,
            communicates, and thrives in space.
          </p>
          <button
            type="button"
            className="inline-block border border-white px-5 py-2 rounded text-white font-inter text-xs md:text-sm transition-all
             hover:bg-gradient-to-b hover:from-[#0BFFD3] hover:via-cyan-400 hover:to-[#316BDE]
             hover:border-transparent hover:text-white
             hover:shadow-[0_0_35px_rgba(56,189,248,0.45)] hover:scale-[1.03]"
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



export default function Index() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive scroll duration: 4 screens for mobile, 7 for desktop
  const [scrollDurationInScreens, setScrollDurationInScreens] = useState(7);

  useEffect(() => {
    const handleResize = () => {
      setScrollDurationInScreens(window.innerWidth < 768 ? 3 : 7);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const { top } = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollableDistance = windowHeight * (scrollDurationInScreens - 1);
      // Avoid division by zero if scrollDurationInScreens is 1 (though unlikely here)
      if (scrollableDistance <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = Math.max(0, Math.min(1, -top / scrollableDistance));
      setScrollProgress(progress);
    };

    // Initial check to set correct state on mount/refresh
    handleScroll();

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
      <div ref={containerRef} className="relative snap-start" style={{ height: containerHeight }}>
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
      {/* Added snap-start and scrollSnapStop to force stop on mobile */}
      <div className="snap-start" style={{ scrollSnapStop: "always" }}>
        <VideoObservationSection />
      </div>
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
