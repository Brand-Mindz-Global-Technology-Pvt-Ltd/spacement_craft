import React from "react";
import Navbar from "../components/Navbar";

const About = () => (
  <>
    {/* Responsive Navbar with content offset to prevent overlap */}
    <div className="relative w-full bg-black">
      <Navbar />
      {/* Spacer to offset content below the fixed navbar */}
      <div className="h-[64px] md:h-[72px] lg:h-[80px]" />
      {/* Main About Section */}
      <section
        className="relative bg-black w-full min-h-screen flex flex-col lg:flex-row items-stretch overflow-hidden"
        style={{ maxWidth: "100vw" }}
      >
        {/* Left Side: Astronaut Image (hidden on mobile/tablet) */}
        <div className="relative hidden lg:flex w-1/2 h-[calc(100vh-80px)] flex-shrink-0 items-center justify-end overflow-hidden">
          <div className="relative h-full w-full flex items-center justify-end">
            <img
              src="/assets/Spaceman.png"
              alt="Spaceman"
              className="block h-full w-auto object-contain object-left"
              style={{
                marginLeft: "-10vw",
                zIndex: 1,
                pointerEvents: "none",
                userSelect: "none",
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center min-h-[calc(100vh-80px)] py-10 px-4 sm:px-8">
          <div
            className="w-full flex flex-col items-center justify-center"
            style={{
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            <h2
              className="font-reem font-normal text-white mb-4 text-[2rem] sm:text-[2.2rem] md:text-[2.5rem] leading-tight text-left w-full"
            >
              About Spaceman Craft
            </h2>
            <p
              className="font-inter font-semibold text-white mb-4 tracking-tight text-base sm:text-lg text-left w-full"
            >
              "Driven by Innovation. Defined by Excellence."
            </p>
            <div className="flex flex-col gap-4 w-full">
              <p className="font-inter text-white/80 leading-relaxed text-base sm:text-lg text-left">
                At Spaceman Craft Private Limited, we are driven by innovation and a passion for engineering excellence. Established in 2022 and headquartered in Kanyakumari, Tamil Nadu, our company is focused on designing and developing advanced solutions in aerospace, manufacturing, and next-generation technologies.
              </p>
              <p className="font-inter text-white/80 leading-relaxed text-base sm:text-lg text-left">
                Guided by industry experts and supported by a dynamic team, we strive to build reliable, efficient, and sustainable systems that push the boundaries of what’s possible. From nurturing student talent through CubeSat programs to pioneering electric space thruster technology, Spaceman Craft is committed to shaping the future of space exploration and engineering with creativity, precision, and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* Stats Section */}
    <section
      className="relative w-full bg-black flex justify-center items-center py-8 px-2 md:px-12"
      style={{
        minHeight: "110px",
        overflow: "visible",
      }}
    >
      <div className="relative w-full max-w-5xl flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center sm:gap-2 md:gap-8">
        {/* Stat 1 */}
        <div className="flex flex-col items-center flex-1 min-w-[100px] py-3">
          <span className="text-white text-xl xs:text-2xl md:text-3xl font-bold font-inter">
            25<span className="align-super text-base font-normal">+</span>
          </span>
          <span className="text-white/80 text-xs md:text-sm mt-1 font-inter text-center">
            Years of Experience
          </span>
        </div>
        {/* Stat 2 */}
        <div className="flex flex-col items-center flex-1 min-w-[100px] py-3">
          <span className="text-white text-xl xs:text-2xl md:text-3xl font-bold font-inter">25K</span>
          <span className="text-white/80 text-xs md:text-sm mt-1 font-inter text-center">
            Completed Projects
          </span>
        </div>
        {/* Astronaut Image */}
        <div className="flex flex-col items-center flex-1 min-w-[100px] relative h-[70px] xs:h-[80px] md:h-[120px] py-3">
          <img
            src="/assets/ABOUTEX.png"
            alt="Astronaut"
            className="absolute inset-0 w-full h-full object-cover object-center z-10"
            style={{
              filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.7))",
              pointerEvents: "none",
              userSelect: "none",
            }}
            draggable={false}
          />
        </div>
        {/* Stat 3 */}
        <div className="flex flex-col items-center flex-1 min-w-[100px] py-3">
          <span className="text-white text-xl xs:text-2xl md:text-3xl font-bold font-inter">2K</span>
          <span className="text-white/80 text-xs md:text-sm mt-1 font-inter text-center">
            Our Specialists
          </span>
        </div>
        {/* Stat 4 */}
        <div className="flex flex-col items-center flex-1 min-w-[100px] py-3">
          <span className="text-white text-xl xs:text-2xl md:text-3xl font-bold font-inter">5K</span>
          <span className="text-white/80 text-xs md:text-sm mt-1 font-inter text-center">
            Success Stories
          </span>
        </div>
      </div>
    </section>

    {/* CEO Section - Responsive */}
    <section className="w-full bg-black flex flex-col items-center justify-center py-8 px-2 sm:py-10 md:py-12 md:px-6">
      <div className="flex flex-col md:flex-row items-start justify-center w-full gap-6 sm:gap-8 md:gap-12 max-w-6xl">
        {/* Left: CEO Image */}
        <div className="w-full md:w-[45%] flex-shrink-0 flex justify-center md:justify-start h-full mb-6 md:mb-0">
          <img
            src="./assets/ceo.png"
            alt="CEO"
            className="
              rounded-sm object-cover shadow-lg border border-white/10
              w-full max-w-[340px] xs:max-w-[400px] sm:max-w-[440px] md:max-w-[480px]
              h-[220px] xs:h-[260px] sm:h-[320px] md:h-[380px]
            "
            style={{
              background: "#222",
              objectPosition: "center top",
              userSelect: "none",
              pointerEvents: "none",
            }}
            draggable={false}
          />
        </div>
        {/* Right: Content */}
        <div
          className="flex-1 flex flex-col justify-start w-full md:w-[55%] max-w-full"
          style={{ minHeight: "unset", maxWidth: "850px" }}
        >
          <h2 className="font-reem text-xl xs:text-2xl md:text-3xl font-normal text-white mb-3 md:mb-4 mt-2 md:mt-0">
            Meet <span className="font-reem font-normal">Our CEO</span>
          </h2>
          <div className="space-y-3">
            <p className="font-inter text-white/80 leading-relaxed text-xs xs:text-sm md:text-base">
              International-based deep-tech rebel startup, founded in 2022, focused on building high-efficiency electric propulsion systems. Our mission? Help satellites travel farther, operate longer, and reduce space mission costs dramatically. International-based deep-tech rebel startup, founded in 2022, focused on building high-efficiency electric propulsion systems. Our mission? Help satellites travel farther, operate longer, and reduce space mission costs dramatically.
            </p>
            <p className="font-inter text-white/80 leading-relaxed text-xs xs:text-sm md:text-base">
              International-based deep-tech rebel startup, founded in 2022, focused on building high-efficiency electric propulsion systems. 
            </p>
            
          </div>
        </div>
      </div>
    </section>

    {/* CEO's Message Section */}
    <section className="w-full flex flex-col items-center justify-center pb-16 px-4 md:px-0 bg-black">
      <div className="w-full max-w-[1400px] flex flex-col items-center px-2 md:px-8">
        <h2 className="font-reem text-2xl md:text-3xl font-normal text-white mb-6 text-center tracking-wide">
          CEO’S MESSAGE
        </h2>
        <div
          className="w-full rounded-lg overflow-hidden shadow-2xl border border-white/10 relative"
          style={{
            backgroundImage: "url('/assets/CEOMESSAGE.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: 240, // Increased from 120
            maxHeight: 340, // Increased from 170
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1400px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 py-6">
            <span className="text-white text-2xl mb-2 font-reem">“</span>
            <p className="text-white text-center font-inter text-xs md:text-sm max-w-2xl drop-shadow-lg whitespace-pre-line">
              From the wheel to spaceflight, humanity’s greatest leaps began with the urge to 
              move. On this pale blue dot, we are but a tiny speck—yet one that dares to propel 
              itself beyond, while the rest drift with space-time. At Spaceman Craft, we exist to 
              make that leap possible.
            </p>
            <div className="mt-4 text-white/80 text-xs md:text-sm font-inter text-center">
              <span className="italic">_ Praveen Kumar N,</span>
              <br />
              <span className="italic">CEO, Spaceman Craft</span>
            </div>
          </div>
        </div>
      </div>
    </section>


  {/* Gallery/Quote Section */}
  <section className="w-full max-w-full flex flex-col items-center justify-center py-0 bg-black px-0 overflow-x-hidden">
    <div className="w-full max-w-full flex flex-col gap-0 px-0">
      {/* Top Row: Two images + Quote block */}
      <div className="flex flex-col md:flex-row gap-0 w-full max-w-full">
        {/* Image 1 */}
        <div className="flex-1 min-w-0 flex items-stretch">
          <img
            src="/assets/aboutg1.png"
            alt="Rocket Launch"
            className="w-full h-full aspect-[4/3] object-cover object-center"
            style={{ minHeight: "160px", maxHeight: "320px" }}
            draggable={false}
          />
        </div>
        {/* Image 2 */}
        <div className="flex-1 min-w-0 flex items-stretch">
          <img
            src="/assets/aboutg2.png"
            alt="Spacecraft Window"
            className="w-full h-full aspect-[4/3] object-cover object-center"
            style={{ minHeight: "160px", maxHeight: "320px" }}
            draggable={false}
          />
        </div>
        {/* Quote Block with BG */}
        <div
          className="flex-1 min-w-0 flex items-center justify-center relative"
          style={{
            backgroundImage: "url('/assets/aboutg3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "160px",
            height: "100%",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-2 py-6">
            <svg width="48" height="48" viewBox="0 0 48 48" className="mb-2 text-cyan-400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="38" fontSize="48" fontFamily="Arial" fill="#22d3ee">“</text>
            </svg>
            <p className="text-white text-center font-inter text-base md:text-lg max-w-xs">
              Fueling Space Dreams With Electric Propulsion Brilliance.
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Row: Two images, left is square, right is wide */}
      <div className="flex flex-col md:flex-row gap-0 w-full max-w-full mt-0">
        {/* Image 3: Square */}
        <div className="flex-1 min-w-0 flex items-stretch">
          <img
            src="/assets/aboutg4.png"
            alt="Earth at Night"
            className="w-full h-full aspect-square object-cover object-center"
            style={{ minHeight: "160px", maxHeight: "320px" }}
            draggable={false}
          />
        </div>
        {/* Image 4: Wide */}
        <div className="flex-[2] min-w-0 overflow-hidden flex items-stretch">
          <img
            src="/assets/aboutg5.png"
            alt="Earth from Orbit"
            className="w-full h-full aspect-[16/7] object-cover object-center"
            style={{ minHeight: "160px", maxHeight: "320px", width: "100%" }}
            draggable={false}
          />
        </div>
      </div>
    </div>
  </section>

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
        </p>        <div className="mt-3 flex gap-4 md:mt-0">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Refund Policy</a>
        </div>
      </div>
    </div>
  </footer>
  </>
);

export default About;
