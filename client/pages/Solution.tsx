import React from "react";

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
  {
    title: "Farm Scan",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    desc: "Monitor crop health and optimize yield with real-time multispectral imaging.",
  },
  {
    title: "Sky Vision",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    desc: "High-resolution atmospheric analysis for weather and climate research.",
  },
  {
    title: "Traffic Sense 360",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    desc: "Urban mobility insights and traffic monitoring from orbit.",
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

const Solution = () => (
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

      <div className="relative z-10 w-full max-w-[1320px] min-h-[700px] flex flex-col justify-center px-4 md:px-8">
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
        
        {/* 3x3 Grid of Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
          {items.slice(0, 9).map((it, idx) => (
            <a
              key={idx}
              href="#"
              className="group relative bg-transparent rounded-[12px] overflow-hidden transition w-full max-w-full min-w-[0] min-h-[380px] shadow-none"
              style={{
                height: "380px",
              }}
            >
              {/* Card surface */}
              <div className="absolute inset-0 rounded-[12px] bg-black/60 border border-[#FEC053]/10 transition-all duration-300 group-hover:bg-gray-700/50 group-hover:border-[#FEC053] group-hover:shadow-[0_0_0_1px_rgba(254,192,83,0.35),0_12px_30px_rgba(0,0,0,0.5)]" />
              <div className="relative flex flex-col h-full p-4">
                <div className="rounded-[8px] w-full overflow-hidden shadow-inner transition-transform duration-300 group-hover:scale-[1.02]" style={{ height: "200px" }}>
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
  </div>
);

export default Solution;
