import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";

// Utility function for conditional classNames (Tailwind-friendly)
function cn(...args: (string | false | undefined | null)[]) {
  return args.filter(Boolean).join(" ");
}

// Example specialties data for each tab


const Product = () => {
  const [selectedTab, setSelectedTab] = useState("space");
  const [showBanner, setShowBanner] = useState(false);
  const [showSection, setShowSection] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Reveal banner after a short delay
    const bannerTimer = setTimeout(() => {
      setShowBanner(true);
    }, 100);

    return () => clearTimeout(bannerTimer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowSection(true);
            observer.disconnect(); // Animate only once
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <div 
        className={cn(
          "relative w-full min-h-[350px] md:min-h-[500px] h-[50vw] max-h-[800px] flex items-end justify-start overflow-hidden transition-all duration-1000 ease-out",
          showBanner ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <img
          src="/assets/product/productbanner.webp"
          alt="Spacecraft in orbit"
          className="absolute inset-0 w-full h-full object-cover object-center"
          draggable={false}
      
        />
        <div className="absolute inset-0 lg:bg-gradient-to-b lg:from-black/0 lg:via-black/0 lg:to-black/0 bg-gradient-to-b from-black/80  via-black/10 to-black/90"  />
        <div className="relative z-10 px-4 md:px-16 pb-8 md:pb-16 w-full">
          {/* Breadcrumb */}
          
          <h1 className="text-[21px] md:text-[38px] lg:text-[44px] font-normal letter-spacing-[2px] font-reem text-white drop-shadow-lg">
            Our Product
          </h1>
          <nav className="mt-3 flex items-center space-x-2 text-white/80 text-xs md:text-sm font-reem">
            <a href="/" className="hover:underline font-reem">Home</a>
            <span className="mx-1">{' > '}</span>
            <span className="text-white font-medium font-reem">Our Product</span>
          </nav>
        </div>
      </div>
   
      <section 
        ref={sectionRef}
        className={cn(
          "w-full flex flex-col items-center justify-center  md:px-0 py-8 md:py-12 bg-black transition-all duration-1000 ease-out delay-200",
          showSection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <div className="relative w-full  mx-auto  overflow-hidden shadow-lg lg:min-h-[400px] lg:h-[600px] h-[250px] " >
          {/* Earth background */}
          <img
            src="/assets/product/2.webp"
            alt="Earth from orbit"
            className="absolute inset-0 lg:w-full lg:h-full w-full h-60 object-cover object-center  "
            draggable={false}
            style={{ zIndex: 0 }}
          />
          {/* Overlay for effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/90 z-10" />
          {/* Satellite image and content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-end lg:pb-12 lg:px-4 px-2 lg:mb-0 mb-4">
            <p className="text-center text-white text-[12px] md:text-sm font-inter lg:mb-6 mb-3 max-w-2xl mx-auto">
              International-based deep-tech metal startup, founded in 2022, focused on building
              high-efficiency electric propulsion systems.
            </p>
            <button
           className="rounded-xl bg-gradient-to-b from-[#0BFFD3] via-cyan-400 to-[#316BDE] px-5 py-2.5 text-xs md:text-sm font-medium text-white shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(56,189,248,0.45)]"
              onClick={() => window.location.href = '/contactus'}
            >
              Enquiry Us
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
        </p>            <div className="mt-3 flex gap-4 md:mt-0">
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


