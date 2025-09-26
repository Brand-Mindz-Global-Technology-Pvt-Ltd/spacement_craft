import React, { useState, useRef } from "react";

// Utility function for conditional classNames (Tailwind-friendly)
function cn(...args: (string | false | undefined | null)[]) {
  return args.filter(Boolean).join(" ");
}

// Example specialties data for each tab


const Product = () => {
  const [selectedTab, setSelectedTab] = useState("space");

  return (
    <div className="min-h-screen w-full bg-black text-white">
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
            <span className="text-white font-medium">Our Product</span>
          </nav>
          <h1 className="text-2xl md:text-4xl font-semibold font-reem text-white drop-shadow-lg">
            Our Product
          </h1>
        </div>
      </div>
      <section className="w-full flex flex-col md:flex-row items-stretch justify-center px-4 md:px-10 py-8 md:py-12 gap-0 bg-black">
        {/* Left: Product Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/assets/03-orbiting-earth.png"
            alt="Spacemancraft Product in Orbit"
            className="w-full h-full max-w-full max-h-full rounded-lg shadow-2xl object-contain"
            draggable={false}
            style={{ background: "rgba(0,0,0,0.2)", aspectRatio: "1 / 1" }}
          />
        </div>
        {/* Right: Product Description */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-0 md:px-8 py-8 md:py-0">
          <h2 className="font-reem text-2xl md:text-3xl font-semibold text-white mb-4">
            Spacemancraft
          </h2>
          <p className="font-inter text-sm md:text-base text-white/90 leading-relaxed mb-3">
            Innovation-based deep-tech metal startup, founded in 2022, focused on building high-efficiency electric propulsion systems. Our mission: help satellites travel farther, operate longer, and reduce space mission costs dramatically. International-based deep-tech metal startup, founded in 2022, focused on building high-efficiency electric propulsion systems. Our mission: help satellites travel farther, operate longer, and reduce space mission costs dramatically. International-based deep-tech metal startup, founded in 2022, focused on building high-efficiency electric propulsion systems. Our mission: help satellites travel farther, operate longer, and reduce space mission costs dramatically.
          </p>
          <p className="font-inter text-sm md:text-base text-white/90 leading-relaxed">
            International-based deep-tech metal startup, founded in 2022, focused on building high-efficiency electric propulsion systems. Our mission: help satellites travel farther, operate longer, and reduce space mission costs dramatically. International-based deep-tech metal startup, founded in 2022, focused on building high-efficiency electric propulsion systems. Our mission: help satellites travel farther, operate longer, and reduce space mission costs dramatically.
          </p>
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center px-4 md:px-10 py-8 md:py-12 bg-black">
        <div className="relative w-full  mx-auto rounded-2xl overflow-hidden border border-cyan-400/40 shadow-lg" style={{ minHeight: "400px", height: "400px" }}>
          {/* Earth background */}
          <img
            src="/assets/03-orbiting-earth.png"
            alt="Earth from orbit"
            className="absolute inset-0 w-full h-full object-cover object-center"
            draggable={false}
            style={{ zIndex: 0 }}
          />
          {/* Overlay for effect */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          {/* Satellite image and content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-12 px-4">
            <p className="text-center text-white text-sm md:text-base font-inter mb-6 max-w-2xl mx-auto">
              International-based deep-tech metal startup, founded in 2022, focused on building
              high-efficiency electric propulsion systems.
            </p>
            <button
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-medium px-6 py-2 rounded-full shadow-lg transition"
              onClick={() => window.location.href = '/contactus'}
            >
              Enquiry Link
            </button>
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

export default Product;
