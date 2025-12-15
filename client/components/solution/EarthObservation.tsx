import React from "react";
import { items, SolutionItem } from "./solutionData";

interface EarthObservationProps {
  openModal: (item: SolutionItem) => void;
}

const EarthObservation: React.FC<EarthObservationProps> = ({ openModal }) => {
  return (
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
          <h2 className="font-reem text-[21px] md:text-[38px] lg:text-[44px] font-normal uppercase text-white leading-tight tracking-wide text-center">
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
                className="group relative bg-transparent rounded-[12px] overflow-hidden min-w-[370px] max-w-[410px] w-[88vw] sm:w-[410px] min-h-[440px] flex-shrink-0 flex flex-col shadow-none"
                style={{
                  height: "440px",
                  scrollSnapAlign: "start",
                }}
              >
                {/* Background layer below image */}
                <div className="absolute inset-0 rounded-[12px] bg-black transition-colors duration-300 group-hover:bg-gray-700/50 pointer-events-none z-0" />

                {/* Edge/border accents */}
                <div className="absolute inset-0 rounded-[12px] border border-[#FEC053]/10 transition-all duration-300 pointer-events-none z-20">
                  {/* Top-left horizontal accent */}
                  <div
                    className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] w-2/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-[12px]"
                    style={{
                      background: "linear-gradient(90deg, rgba(254,192,83,0.9) 0%, rgba(254,192,83,0.0) 100%)",
                    }}
                  />
                  {/* Top-left vertical down accent */}
                  <div
                    className="pointer-events-none absolute top-0 left-0 w-[2px] h-2/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-[12px]"
                    style={{
                      background: "linear-gradient(180deg, rgba(254,192,83,0.9) 0%, rgba(254,192,83,0.0) 100%)",
                    }}
                  />
                  {/* Bottom-right vertical accent */}
                  <div
                    className="pointer-events-none absolute bottom-0 right-0 w-[2px] h-2/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-[12px]"
                    style={{
                      background: "linear-gradient(0deg, rgba(254,192,83,0.9) 0%, rgba(254,192,83,0.0) 100%)",
                    }}
                  />
                  {/* Bottom-right horizontal accent */}
                  <div
                    className="pointer-events-none absolute bottom-0 right-0 h-[2px] w-2/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-[12px]"
                    style={{
                      background: "linear-gradient(270deg, rgba(254,192,83,0.9) 0%, rgba(254,192,83,0.0) 100%)",
                    }}
                  />
                </div>

                <div className="relative flex flex-col h-full z-10">
                  {/* Card image */}
                  <div className="w-full h-[210px] overflow-hidden">
                    <img
                      src={it.img}
                      alt={it.title}
                      className="w-full h-full object-cover block"
                      draggable={false}
                    />
                  </div>
                  {/* Card content */}
                  <div className="flex flex-col flex-1 px-6 py-5">
                    <h3 className="font-reem text-[18px] md:text-[20px] lg:text-[22px] text-white font-normal leading-tight mb-2">
                      {it.title}
                    </h3>
                    <p className="font-inter text-[12px] md:text-sm text-gray-300 leading-[1.6] mb-6 line-clamp-3">
                      {it.desc}
                    </p>
                    <div className="mt-auto flex items-end justify-end">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          openModal(it);
                        }}
                        className="inline-flex items-center justify-center rounded-[6px] border border-[#FEC053]/30 px-4 py-1.5 text-white text-[10px] md:text-[11px] font-inter transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#0BFFD3] group-hover:to-[#3070DE] group-hover:border-[#FFD7004D] group-hover:shadow-[0_8px_20px_rgba(11,255,211,0.25)]"
                      >
                        View Details
                      </button>
                    </div>
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
  );
};

export default EarthObservation;
