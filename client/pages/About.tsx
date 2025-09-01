import React from "react";

const About = () => (
  <>
    {/* Main About Section */}
    <section
      className="relative bg-black w-full min-h-screen flex items-stretch overflow-hidden"
      style={{ maxWidth: "100vw" }}
    >
      {/* Left Side: Astronaut Image */}
      <div className="relative hidden lg:flex w-1/2 h-screen flex-shrink-0 items-center justify-end overflow-hidden">
        <div className="relative h-[98vh] w-full flex items-center justify-end">
          <img
            src="/assets/Spaceman.png"
            alt="Spaceman"
            className="block h-[98vh] w-auto object-contain object-left"
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
      <div className="w-full lg:w-1/2 flex items-center justify-center min-h-screen">
        <div
          className="w-full flex flex-col items-center justify-center"
          style={{
            maxWidth: 700,
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <h2
            className="font-reem font-normal text-white mb-4"
            style={{
              fontSize: "32px",
              lineHeight: "1.1",
              textAlign: "left",
              width: "100%",
            }}
          >
            About Spaceman Craft
          </h2>
          <p
            className="font-inter font-semibold text-white mb-4 tracking-tight"
            style={{
              fontSize: "16px",
              textAlign: "left",
              width: "100%",
            }}
          >
            "Smarter Thrusters. Longer Missions. Lower Costs"
          </p>
          <div
            className="flex flex-col gap-4"
            style={{
              width: "100%",
            }}
          >
            <p
              className="font-inter text-white/80 leading-relaxed"
              style={{
                fontSize: "16px",
                textAlign: "left",
              }}
            >
              International-based deep-tech rebel startup, founded in 2022, focused on building high-efficiency electric propulsion systems. Our mission? Help satellites travel farther, operate longer, and reduce space mission costs dramatically.
            </p>
            <p
              className="font-inter text-white/80 leading-relaxed"
              style={{
                fontSize: "16px",
                textAlign: "left",
              }}
            >
              We are committed to revolutionizing the satellite industry with smarter, more efficient thrusters, enabling longer missions and significant cost savings for our partners and clients.
            </p>
            <p
              className="font-inter text-white/80 leading-relaxed"
              style={{
                fontSize: "16px",
                textAlign: "left",
              }}
            >
              Our international team of specialists brings decades of experience and a passion for innovation, driving us to push the boundaries of what’s possible in space propulsion.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section
      className="relative w-full bg-black flex justify-center items-center py-8 px-2 md:px-12"
      style={{
        minHeight: "110px",
        overflow: "visible",
      }}
    >
      <div className="relative flex w-full max-w-5xl justify-between items-center gap-2 md:gap-8">
        {/* Stat 1 */}
        <div className="flex flex-col items-center flex-1 min-w-[120px]">
          <span className="text-white text-2xl md:text-3xl font-bold font-inter">
            25<span className="align-super text-base font-normal">+</span>
          </span>
          <span className="text-white/80 text-xs md:text-sm mt-1 font-inter">
            Years of Experience
          </span>
        </div>
        {/* Stat 2 */}
        <div className="flex flex-col items-center flex-1 min-w-[120px]">
          <span className="text-white text-2xl md:text-3xl font-bold font-inter">25K</span>
          <span className="text-white/80 text-xs md:text-sm mt-1 font-inter">
            Completed Projects
          </span>
        </div>
        {/* Astronaut Image */}
        <div className="flex flex-col items-center flex-1 min-w-[120px] relative h-[80px] md:h-[120px]">
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
        <div className="flex flex-col items-center flex-1 min-w-[120px]">
          <span className="text-white text-2xl md:text-3xl font-bold font-inter">2K</span>
          <span className="text-white/80 text-xs md:text-sm mt-1 font-inter">
            Our Specialists
          </span>
        </div>
        {/* Stat 4 */}
        <div className="flex flex-col items-center flex-1 min-w-[120px]">
          <span className="text-white text-2xl md:text-3xl font-bold font-inter">5K</span>
          <span className="text-white/80 text-xs md:text-sm mt-1 font-inter">
            Success Stories
          </span>
        </div>
      </div>
    </section>

    {/* CEO Section - Adjusted padding and image/content sizing */}
    <section className="w-full bg-black flex flex-col items-center justify-center py-12 px-2 md:px-6">
      <div className="flex flex-col md:flex-row items-start justify-center w-full gap-8 md:gap-12">
        {/* Left: CEO Image */}
        <div className="w-full md:w-[480px] flex-shrink-0 flex justify-center md:justify-start h-full">
          <img
            src="./assets/ceo.png"
            alt="CEO"
            className="rounded-sm object-cover w-[480px] h-[380px] md:w-[480px] md:h-[380px] shadow-lg border border-white/10"
            style={{
              background: "#222",
              objectPosition: "center top",
              userSelect: "none",
              pointerEvents: "none",
              minHeight: "380px",
              minWidth: "480px",
              maxHeight: "380px",
              maxWidth: "480px",
            }}
            draggable={false}
          />
        </div>
        {/* Right: Content */}
        <div
          className="flex-1 flex flex-col justify-start"
          style={{ minHeight: "420px", maxWidth: "850px" }}
        >
          <h2 className="font-reem text-2xl md:text-3xl font-normal text-white mb-4 mt-2 md:mt-0">
            Meet <span className="font-reem font-normal">Our CEO</span>
          </h2>
          <div className="space-y-3">
            <p className="font-inter text-white/80 leading-relaxed" style={{ fontSize: "14px" }}>
              International-based deep-tech rebel startup, founded in 2022, focused on building high-efficiency electric propulsion systems. Our mission? Help satellites travel farther, operate longer, and reduce space mission costs dramatically. International-based deep-tech rebel startup, founded in 2022, focused on building high-efficiency electric propulsion systems. Our mission? Help satellites travel farther, operate longer, and reduce space mission costs dramatically.
            </p>
            <p className="font-inter text-white/80 leading-relaxed" style={{ fontSize: "14px" }}>
              International-based deep-tech rebel startup, founded in 2022, focused on building high-efficiency electric propulsion systems. Our mission? Help satellites travel farther, operate longer, and reduce space mission costs dramatically. International-based deep-tech rebel startup, founded in 2022, focused on building high-efficiency electric propulsion systems. Our mission? Help satellites travel farther, operate longer, and reduce space mission costs dramatically.
            </p>
            <p className="font-inter text-white/80 leading-relaxed" style={{ fontSize: "14px" }}>
              International-based deep-tech rebel startup, founded in 2022, focused on building high-efficiency electric propulsion systems. Our mission? Help satellites travel farther, operate longer, and reduce space mission costs dramatically. International-based deep-tech rebel startup, founded in 2022, focused on building high-efficiency electric propulsion systems. Our mission? Help satellites travel farther, operate longer, and reduce space mission costs dramatically.
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
            <p className="text-white text-center font-inter text-xs md:text-sm max-w-2xl drop-shadow-lg">
              The aim was simple, popularize his love for trekking and passion for mountain related activities to the region. Fast forward to 2016 and ME as it is now known has moved from the mountains of Ras Al Khaimah to an initial location in Business Bay. The first integrated indoor purpose-built climbing wall is born in Dubai.
            </p>
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
            <li><a href="/ourproduct" className="hover:text-white">Product</a></li>
            <li><a href="#solution" className="hover:text-white">Solution</a></li>
            <li><a href="#vision" className="hover:text-white">Vision</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
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
  </>
);

export default About;
