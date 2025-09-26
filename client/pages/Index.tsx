import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EarthCanvas from "./EarthCanvas";
import HeroContent from "./HeroContent";
import Navbar from "../components/Navbar";


// Real Hero Section with 3D Earth Effect
const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* 3D Earth Canvas as background */}
      <EarthCanvas />
      
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Hero Content Overlay */}
      <HeroContent />
    </section>
  );
};


export const OurProductSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[700px] flex justify-center bg-black">
      <div className="relative w-full max-w-[1400px] min-h-[700px] flex justify-center items-start">
        {/* Background image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Spaceman craft orbiting earth and moon"
          src="/assets/spaceman-craft-orbiting-earth-and-moon-2.png"
          style={{ zIndex: 0 }}
        />

        {/* Top gradient overlay */}
        <div
          className="absolute inset-0 h-[340px] w-full bg-gradient-to-b from-black via-black/80 to-transparent"
          style={{ zIndex: 1 }}
        />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center w-full px-4"
          style={{ marginTop: "60px" }}
        >
          <h1 className="font-reem text-white text-[32px] md:text-[38px] lg:text-[44px] font-normal text-center tracking-wide mb-3">
            OUR PRODUCT
          </h1>
          <p className="max-w-[420px] text-center text-white/90 text-xs md:text-sm font-inter mb-2 leading-relaxed flex items-center gap-2">
            <span>&quot; Powering the Future From the Moon &quot;</span>
            <span>
              <svg
                width="32"
                height="20"
                viewBox="0 0 32 20"
                fill="none"
                className="inline-block align-middle"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.5 10C31.5 15.2467 24.5081 19.5 16 19.5C7.49187 19.5 0.5 15.2467 0.5 10C0.5 4.75329 7.49187 0.5 16 0.5C24.5081 0.5 31.5 4.75329 31.5 10Z"
                  stroke="#B6B6B6"
                />
                <circle cx="24" cy="5" r="3" fill="#B6B6B6" />
              </svg>
            </span>
          </p>
          <p className="max-w-[600px] text-center text-white/90 text-xs md:text-sm font-inter mb-5 leading-relaxed">
            SpacemanCraft is on a mission to build the first-ever lunar data
            center—reshaping how the world thinks about infrastructure,
            connectivity, and the cosmos. Welcome to the future of data, built
            in space.
          </p>
        </div>
      </div>
    </section>
  );
};
const VideoObservationSection = () => {
  const items = [
    {
      title: "Hyperspectral Vision",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/44d47a5d1658608c03887f3ffd188776125c7cf4?width=1051",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra.",
    },
    {
      title: "Defence Surveillance",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/3f1e84217d78a591e5fe172b0a9b8d3029537341?width=1009",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra.",
    },
    {
      title: "Ocean Net",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/46faf5a2fa5b4c6392659eaf48c4ad8540804c04?width=978",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra.",
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
            Break barriers in space. Unlock reliable, sustainable satellite
            operations.
          </p>
          {/* CTA Button in right corner, absolutely positioned */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
            <button className="border border-[#FEC053]/30 px-5 py-2.5 rounded-[6px] text-white font-inter text-[12px] hover:bg-[#FEC053]/10 transition-all shadow-[0_2px_8px_0_rgba(254,192,83,0.10)]">
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
            >
              {/* Card surface */}
              <div className="absolute inset-0 rounded-[12px] bg-black/60 border border-[#FEC053]/10 transition-all duration-300 group-hover:bg-gray-700/50 group-hover:border-[#FEC053] group-hover:shadow-[0_0_0_1px_rgba(254,192,83,0.35),0_12px_30px_rgba(0,0,0,0.5)]" />
              <div className="relative flex flex-col h-full p-4">
                <div
                  className="rounded-[8px] w-full overflow-hidden shadow-inner transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ height: "200px" }}
                >
                  <img
                    src={it.img}
                    alt={it.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
                <h3 className="mt-4 font-reem text-[15px] text-white font-normal leading-tight">
                  {it.title}
                </h3>
                <p className="mt-2 font-inter text-[11px] leading-[1.5] text-gray-300 line-clamp-3">
                  {it.desc}
                </p>
                <div className="mt-auto flex items-end">
                  <span className="inline-flex items-center justify-center rounded-[6px] border border-[#FEC053]/30 px-4 py-1.5 text-white text-[11px] font-inter transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#0BFFD3] group-hover:to-[#3070DE] group-hover:border-[#FEC053] group-hover:shadow-[0_8px_20px_rgba(11,255,211,0.25)] ml-auto">
                    View Details
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden text-center">
          <button className="border border-[#FEC053]/30 px-5 py-2.5 rounded-[6px] text-white font-inter text-[12px] hover:bg-[#FEC053]/10 transition-all shadow-[0_2px_8px_0_rgba(254,192,83,0.10)]">
            Explore Full Archive
          </button>
        </div>
      </div>
    </section>
  );
};

export const VisionStatementSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[700px] flex justify-center bg-black">
      <div className="relative w-full max-w-[1400px] min-h-[700px] flex justify-center items-start">
        {/* Background image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Satellite orbit with planet earth background"
          src="/assets/08-satellite-orbit.jpg"
          style={{ zIndex: 0 }}
        />

        {/* Top gradient overlay */}
        <div
          className="absolute inset-0 h-[340px] w-full bg-gradient-to-b from-black via-black/80 to-transparent"
          style={{ zIndex: 1 }}
        />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center w-full px-4"
          style={{ marginTop: "60px" }}
        >
          <h1 className="font-reem text-white text-[32px] md:text-[38px] lg:text-[44px] font-normal text-center tracking-wide mb-3">
            OUR VISION
          </h1>
          <p className="max-w-[700px] text-center text-white/90 text-xs md:text-sm font-inter mb-5 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
};

export const GoingToTheMoonSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[700px] flex justify-center bg-black">
      <div className="relative w-full max-w-[1400px] min-h-[700px] flex justify-center items-start">
        {/* Background image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Going to the moon background"
          src="/assets/frame-1597883628.png"
          style={{ zIndex: 0 }}
        />

        {/* Top gradient overlay */}
        <div
          className="absolute inset-0 h-[340px] w-full bg-gradient-to-b from-black via-black/80 to-transparent"
          style={{ zIndex: 1 }}
        />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center w-full px-4"
          style={{ marginTop: "60px" }}
        >
          <h1 className="font-reem text-white text-[32px] md:text-[38px] lg:text-[44px] font-normal text-center tracking-wide mb-3">
            GOING TO THE MOON
          </h1>
          <p className="max-w-[420px] text-center text-white/90 text-xs md:text-sm font-inter mb-5 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            variant="outline"
            className="px-5 py-1.5 rounded bg-transparent border border-white text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors"
          >
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export const DataCenterSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[700px] flex justify-center bg-black">
      <div className="relative w-full max-w-[1400px] min-h-[700px] flex justify-center items-start">
        {/* Background image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Data center on moon background"
          src="/assets/10-data-center-moon.jpg"
          style={{ zIndex: 0 }}
        />

        {/* Top gradient overlay */}
        <div
          className="absolute inset-0 h-[340px] w-full bg-gradient-to-b from-black via-black/80 to-transparent"
          style={{ zIndex: 1 }}
        />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center w-full px-4"
          style={{ marginTop: "60px" }}
        >
          <h1 className="font-reem text-white text-[32px] md:text-[38px] lg:text-[44px] font-normal text-center tracking-wide mb-3">
            DATA CENTER ON MOON
          </h1>
          <p className="max-w-[420px] text-center text-white/90 text-xs md:text-sm font-inter mb-5 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            variant="outline"
            className="px-5 py-1.5 rounded bg-transparent border border-white text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors"
          >
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export const SpaceTourismSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[700px] flex justify-center bg-black">
      <div className="relative w-full max-w-[1400px] min-h-[700px] flex justify-center items-start">
        {/* Background image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Space background"
          src="/assets/11-space-tourism.jpg"
          style={{ zIndex: 0 }}
        />

        {/* Top gradient overlay */}
        <div
          className="absolute inset-0 h-[340px] w-full bg-gradient-to-b from-black via-black/80 to-transparent"
          style={{ zIndex: 1 }}
        />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center w-full px-4"
          style={{ marginTop: "60px" }}
        >
          <h1 className="font-reem text-white text-[32px] md:text-[38px] lg:text-[44px] font-normal text-center tracking-wide mb-3">
            SPACE TOURISM
          </h1>
          <p className="max-w-[420px] text-center text-white/90 text-xs md:text-sm font-inter mb-5 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            variant="outline"
            className="px-5 py-1.5 rounded bg-transparent border border-white text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors"
          >
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
};

const BlogsSection = () => (
  <section className="relative bg-black py-20 md:py-24 overflow-hidden">
    {/* Subtle glow (smaller & darker than before) */}
    <div className="pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[#0BFFD3] opacity-20 blur-[140px]" />

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
      {/* Header — smaller like Image-1 */}
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

      {/* Layout — slightly increase left width, decrease right width */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Featured (slightly increased width: 5/12) */}
        <div className="lg:col-span-5">
          <div className="relative bg-gradient-to-br from-[#23272F] to-[#181A20] border border-[#FEC053] rounded-2xl shadow-xl overflow-hidden">
            <div className="relative w-full h-[240px] sm:h-[260px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8d131cf968ba9d25f16ec41d57b7bf0809d4b910?width=1420"
                alt="Total Lunar Eclipse Gala"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 right-3 bg-[#23272F]/80 px-3 py-[6px] rounded-full text-white text-[11px] font-inter">
                Featured Event
              </span>
            </div>

            <div className="p-5 sm:p-6">
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
                <button className="bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] px-4 py-1.5 rounded-lg text-white font-inter text-xs border border-yellow-400/30 hover:from-[#0DF7D4]/85 hover:to-[#2C7BDC]/85 transition">
                  Explore more
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Side list (decreased width: 7/12) */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {[
            { date: "May 22-25, 2025" },
            { date: "August 11-13, 2025" },
            { date: "September 5, 2025" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#181A20]/85 border border-yellow-400/10 rounded-2xl p-5 shadow backdrop-blur-sm transition-colors duration-200 hover:border-[#FEC053]"
            >
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
                <button className="border border-yellow-400/30 px-3 py-1 rounded-lg text-gray-200 font-inter text-xs hover:bg-white hover:text-black transition">
                  Read
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
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
        <p className="font-inter text-xs md:text-sm font-semibold text-white mb-2 tracking-tight">
          "Smarter Thrusters. Longer Missions. Lower Costs"
        </p>
        <p className="font-inter text-sm md:text-base text-white/80 leading-relaxed mb-8">
          International-based deep-tech rebel startup, founded in 2022, focused
          on building high-efficiency electric propulsion systems. Our mission?
          Help satellites travel farther, operate longer, and reduce space
          mission costs dramatically.
        </p>
        <button className="border border-white px-5 py-2 rounded text-white font-inter text-sm hover:bg-white hover:text-black transition-all">
          Explore Now
        </button>
      </div>
    </div>
  </section>
);

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
        <p>© 2025 Spacemancraft. All Rights Reserved.</p>
        <div className="mt-3 flex gap-4 md:mt-0">
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
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <OurProductSection />
      <VideoObservationSection />
      <VisionStatementSection />
      <GoingToTheMoonSection />
      <DataCenterSection />
      <SpaceTourismSection />
      <BlogsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
