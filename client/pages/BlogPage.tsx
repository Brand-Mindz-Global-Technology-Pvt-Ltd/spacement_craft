import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
// To resolve "Cannot find module '@react-spring/web' or its corresponding type declarations":
// 1. Install the package in your project root with:
//    pnpm add @react-spring/web
// 2. If you use TypeScript and need types, install:
//    pnpm add -D @types/react-spring__web
import { useSpring, animated } from "@react-spring/web";

// Utility function for conditional classNames (Tailwind-friendly)
function cn(...args: (string | false | undefined | null)[]) {
  return args.filter(Boolean).join(" ");
}

// Example specialties data for each tab
const specialtiesData: Record<string, Array<{
  title: string;
  img: string;
  desc: string;
  date?: string;
  isCurated?: boolean;
}>> = {
  space: [
    {
      title: "Hyperspectral Vision",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/44d47a5d1658608c03887f3ffd188776125c7cf4?width=1051",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra.",
      date: "2025-05-01",
      isCurated: true,
    },
    {
      title: "Defence Surveillance",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/3f1e84217d78a591e5fe172b0a9b8d3029537341?width=1009",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra.",
      date: "2025-06-10",
    },
    {
      title: "Ocean Net",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/46faf5a2fa5b4c6392659eaf48c4ad8540804c04?width=978",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra.",
      date: "2025-07-15",
    },
  ],
  technology: [
    {
      title: "Farm Scan",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      desc: "Monitor crop health and optimize yield with real-time multispectral imaging.",
      date: "2025-08-01",
      isCurated: true,
    },
    {
      title: "Sky Vision",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      desc: "High-resolution atmospheric analysis for weather and climate research.",
      date: "2025-09-10",
    },
    {
      title: "Traffic Sense 360",
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
      desc: "Urban mobility insights and traffic monitoring from orbit.",
      date: "2025-10-05",
    },
  ],
  satellite: [
    {
      title: "Mineris",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      desc: "Resource mapping and mineral exploration with advanced sensors.",
      date: "2025-11-01",
    },
    {
      title: "Eco Watch",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/44d47a5d1658608c03887f3ffd188776125c7cf4?width=1051",
      desc: "Track environmental changes and support conservation efforts.",
      date: "2025-12-10",
      isCurated: true,
    },
    {
      title: "OceanNet",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/46faf5a2fa5b4c6392659eaf48c4ad8540804c04?width=978",
      desc: "Comprehensive ocean monitoring for research and industry.",
      date: "2026-01-15",
    },
  ],
  technology2: [
    {
      title: "Tech Demo 1",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      desc: "A new technology demonstration.",
      date: "2026-02-01",
    },
    {
      title: "Tech Demo 2",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      desc: "Another technology demonstration.",
      date: "2026-03-10",
    },
  ],
  satellite2: [
    {
      title: "Satellite Demo 1",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/3f1e84217d78a591e5fe172b0a9b8d3029537341?width=1009",
      desc: "A new satellite demonstration.",
      date: "2026-04-01",
    },
    {
      title: "Satellite Demo 2",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/44d47a5d1658608c03887f3ffd188776125c7cf4?width=1051",
      desc: "Another satellite demonstration.",
      date: "2026-05-10",
    },
  ],
};

const BlogPage = () => {
  const [selectedTab, setSelectedTab] = useState("space");

  // Refs for GSAP animation
  const heroRef = useRef<HTMLDivElement>(null);
  const blogSectionRef = useRef<HTMLDivElement>(null);
  const specialtiesRef = useRef<HTMLDivElement>(null);
  const specialtiesCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const footerRef = useRef<HTMLDivElement>(null);

  // React Spring for fade-in on blog section
  const blogSpring = useSpring({
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0 },
    config: { tension: 120, friction: 30 },
    delay: 200,
  });

  // React Spring for fade-in on specialties section
  const specialtiesSpring = useSpring({
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0 },
    config: { tension: 120, friction: 30 },
    delay: 400,
  });

  // GSAP scroll-triggered animations
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Animate hero section
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: -60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }
    // Animate blog section on scroll
    if (blogSectionRef.current) {
      gsap.fromTo(
        blogSectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: blogSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Animate specialties section on scroll
    if (specialtiesRef.current) {
      gsap.fromTo(
        specialtiesRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: specialtiesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Animate specialties cards staggered
    if (specialtiesCardRefs.current && specialtiesCardRefs.current.length > 0) {
      gsap.fromTo(
        specialtiesCardRefs.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: specialtiesRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Animate footer
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [selectedTab]);

  // Reset specialtiesCardRefs on tab change
  useEffect(() => {
    specialtiesCardRefs.current = [];
  }, [selectedTab]);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative w-full min-h-[350px] md:min-h-[500px] h-[40vw] max-h-[600px] flex items-end justify-start overflow-hidden"
      >
        <img
          src="/assets/Our Product-3.png"
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
            Our Blog
          </h1>
        </div>
      </div>

      <animated.section
        ref={blogSectionRef}
        style={blogSpring}
        className="w-full bg-black py-12 md:py-20 min-h-[90vh] flex justify-center items-center"
      >
        <div className="relative w-full max-w-7xl bg-gradient-to-b from-[#181A20] to-[#101214] rounded-2xl shadow-2xl border border-[#222] overflow-hidden">
          {/* Banner image: edge-to-edge, no left/right padding */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8d131cf968ba9d25f16ec41d57b7bf0809d4b910?width=1420"
            alt="Total Lunar Eclipse Gala"
            className="w-full max-h-[500px] object-fill rounded-t-2xl"
            style={{
              objectPosition: "center top",
              boxShadow: "0 8px 32px 0 rgba(13,247,212,0.10)",
            }}
            draggable={false}
          />
          {/* Content below the image with horizontal padding */}
          <div className="px-4 md:px-16 pt-0 pb-10 md:pb-14">
            {/* Title and date */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 mb-2 px-1">
              <h2 className="font-reem text-xl md:text-2xl text-white font-semibold mb-1 md:mb-0">
                Total Lunar Eclipse Gala
              </h2>
              <span className="text-xs md:text-sm text-gray-400 font-inter">
                October 14, 2025
              </span>
            </div>
            {/* Main blog content */}
            <div className="text-gray-200 font-inter text-[13px] md:text-[15px] leading-relaxed mb-6 px-1">
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique facilisis ultricies. Etiam sit amet magna dictum, rhoncus enim vitae, ullamcorper enim. Pellentesque scelerisque, urna nec dictum dictum, enim erat dictum enim, nec dictum enim erat nec enim. Mauris dictum dictum enim, nec dictum enim erat dictum enim, nec dictum enim erat nec enim. Mauris dictum dictum enim, nec dictum enim erat dictum enim, nec dictum enim erat nec enim.
              </p>
              <h3 className="font-reem text-lg text-white mt-8 mb-2">Total Lunar Eclipse Gala</h3>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique facilisis ultricies. Etiam sit amet magna dictum, rhoncus enim vitae, ullamcorper enim. Pellentesque scelerisque, urna nec dictum dictum, enim erat dictum enim, nec dictum enim erat nec enim. Mauris dictum dictum enim, nec dictum enim erat dictum enim, nec dictum enim erat nec enim. Mauris dictum dictum enim, nec dictum enim erat dictum enim, nec dictum enim erat nec enim.
              </p>
              <h3 className="font-reem text-lg text-white mt-8 mb-2">Total Lunar Eclipse Gala</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique facilisis ultricies. Etiam sit amet magna dictum, rhoncus enim vitae, ullamcorper enim. Pellentesque scelerisque, urna nec dictum dictum, enim erat dictum enim, nec dictum enim erat nec enim. Mauris dictum dictum enim, nec dictum enim erat dictum enim, nec dictum enim erat nec enim. Mauris dictum dictum enim, nec dictum enim erat dictum enim, nec dictum enim erat nec enim.
              </p>
              <h3 className="font-reem text-lg text-white mt-8 mb-2">Total Lunar Eclipse Gala</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique facilisis ultricies. Etiam sit amet magna dictum, rhoncus enim vitae, ullamcorper enim. Pellentesque scelerisque, urna nec dictum dictum, enim erat dictum enim, nec dictum enim erat nec enim. Mauris dictum dictum enim, nec dictum enim erat dictum enim, nec dictum enim erat nec enim. Mauris dictum dictum enim, nec dictum enim erat dictum enim, nec dictum enim erat nec enim.
              </p>
              <h3 className="font-reem text-lg text-white mt-8 mb-2">Total Lunar Eclipse Gala</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique facilisis ultricies. Etiam sit amet magna dictum, rhoncus enim vitae, ullamcorper enim. Pellentesque scelerisque, urna nec dictum dictum, enim erat dictum enim, nec dictum enim erat nec enim. Mauris dictum dictum enim, nec dictum enim erat dictum enim, nec dictum enim erat nec enim. Mauris dictum dictum enim, nec dictum enim erat dictum enim, nec dictum enim erat nec enim.
              </p>
            </div>
            {/* Author card */}
            <div className="flex items-center gap-4 bg-[#181A20]/80 border border-[#222] rounded-xl p-4 mt-8 shadow-lg max-w-md mx-auto">
              <img
                src="/assets/author-avatar.jpg"
                alt="Mrs. Akashyn"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#0DF7D4]"
                draggable={false}
              />
              <div>
                <div className="font-reem text-white text-base font-semibold">Mrs. Akashyn</div>
                <div className="text-xs text-gray-400 font-inter mb-1">Co-Founder of Spacemancraft</div>
                <div className="text-xs text-gray-300 font-inter">
                  Mrs. Akashyn is a visionary leader and co-founder of Spacemancraft, dedicated to advancing lunar exploration and technology.
                </div>
              </div>
            </div>
          </div>
        </div>
      </animated.section>

      {/* Specialties Section */}
      <animated.section
        ref={specialtiesRef}
        style={specialtiesSpring}
        className="w-full max-w-7xl mx-auto mt-12 mb-16 px-4"
      >
        <h2 className="font-reem text-2xl md:text-3xl text-white mb-6">Specialties</h2>
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {[
            { label: "Space", value: "space" },
            { label: "Technology", value: "technology" },
            { label: "Satellite", value: "satellite" },
            { label: "Technology", value: "technology2" },
            { label: "Satellite", value: "satellite2" },
          ].map((tab, idx) => (
            <button
              key={tab.value + idx}
              className={cn(
                "px-6 py-2 rounded-md font-inter text-base border border-[#222] transition-all",
                selectedTab === tab.value
                  ? "bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] text-white shadow-[0_0_16px_0_rgba(13,247,212,0.25)] font-semibold"
                  : "bg-black/60 text-gray-200 hover:bg-[#181A20]/80 hover:text-white"
              )}
              onClick={() => setSelectedTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Horizontally scrollable cards with hand-drag (no visible scrollbar) */}
        <div
          className="relative select-none"
          style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0px, black 32px, black calc(100% - 32px), transparent 100%)" }}
        >
          <div
            className="flex gap-8 overflow-x-auto pb-2 snap-x snap-mandatory"
            style={{
              scrollBehavior: "smooth",
              cursor: "grab",
              userSelect: "none",
              msOverflowStyle: "none",
              scrollbarWidth: "none"
            }}
            tabIndex={0}
            ref={el => {
              // Attach drag-to-scroll logic only once
              if (!el) return;
              if ((el as any)._dragScrollAttached) return;
              (el as any)._dragScrollAttached = true;

              let isDown = false;
              let startX = 0;
              let scrollLeft = 0;

              el.addEventListener("mousedown", (e) => {
                isDown = true;
                el.classList.add("dragging");
                el.style.cursor = "grabbing";
                startX = e.pageX - el.offsetLeft;
                scrollLeft = el.scrollLeft;
              });
              el.addEventListener("mouseleave", () => {
                isDown = false;
                el.classList.remove("dragging");
                el.style.cursor = "grab";
              });
              el.addEventListener("mouseup", () => {
                isDown = false;
                el.classList.remove("dragging");
                el.style.cursor = "grab";
              });
              el.addEventListener("mousemove", (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - el.offsetLeft;
                const walk = (x - startX) * 1.2; // scroll-fast
                el.scrollLeft = scrollLeft - walk;
              });
              // Hide scrollbar (for all browsers)
              el.style.scrollbarWidth = "none";
              // For webkit
              (el as HTMLElement).style.setProperty("overflow", "auto");
              (el as HTMLElement).style.setProperty("scrollbar-width", "none");
              // For Chrome/Safari
              (el as HTMLElement).style.setProperty("scrollbar-color", "transparent transparent");
              // Add custom CSS for ::-webkit-scrollbar
              const styleId = "hide-scrollbar-style";
              if (!document.getElementById(styleId)) {
                const style = document.createElement("style");
                style.id = styleId;
                style.innerHTML = `
                  .flex::-webkit-scrollbar { display: none !important; height: 0 !important; background: transparent !important; }
                  .flex.dragging { cursor: grabbing !important; }
                `;
                document.head.appendChild(style);
              }
            }}
          >
            {specialtiesData[selectedTab].map((item, idx) => (
              <div
                key={idx}
                ref={el => specialtiesCardRefs.current[idx] = el}
                className={cn(
                  "group relative bg-[#181A20]/85 border border-yellow-400/10 rounded-2xl p-0 shadow backdrop-blur-sm transition-colors duration-200 hover:border-[#FEC053] flex flex-col snap-center",
                  idx === 0 ? "ml-6" : "",
                  idx === specialtiesData[selectedTab].length - 1 ? "mr-6" : ""
                )}
                style={{
                  minWidth: "420px",
                  maxWidth: "440px",
                  width: "100%",
                  minHeight: "410px"
                }}
              >
                {/* Card Image */}
                <div className="relative w-full h-[180px] rounded-t-2xl overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                    draggable={false}
                  />
                  {item.isCurated && (
                    <span className="absolute top-3 right-3 bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] text-black text-[11px] font-semibold px-2 py-0.5 rounded shadow">
                      Curated Core
                    </span>
                  )}
                </div>
                {/* Card Content */}
                <div className="flex flex-col flex-1 px-6 py-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-reem text-base md:text-lg text-white">{item.title}</h3>
                    <span className="text-gray-400 text-xs">{item.date}</span>
                  </div>
                  <p className="font-inter text-xs md:text-sm text-gray-300 leading-5 mt-1 line-clamp-3">
                    {item.desc}
                  </p>
                  <div className="mt-5 flex justify-end">
                    <button className="bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] px-4 py-1.5 rounded-lg text-white font-inter text-xs border border-yellow-400/30 hover:from-[#0DF7D4]/85 hover:to-[#2C7BDC]/85 transition">
                      Explore more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </animated.section>
      <footer ref={footerRef} className="relative overflow-hidden text-white">
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

export default BlogPage;
