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
        
        {/* Horizontally scrollable cards with invisible scrollbar */}
        <div className="w-full relative">
          <style>
            {`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .solution-card {
                border: 1.5px solid rgba(254,192,83,0.18);
                background: linear-gradient(180deg, #181A20 60%, #101214 100%);
                box-shadow: 0 2px 16px 0 rgba(11,255,211,0.04);
                transition: border 0.3s, box-shadow 0.3s;
              }
              .solution-card:hover, .solution-card:focus-visible {
                border: 1.5px solid rgba(254,192,83,0.55);
                box-shadow: 0 0 0 2px rgba(254,192,83,0.25), 0 8px 32px 0 rgba(11,255,211,0.10);
              }
              .solution-card .view-details-btn {
                background: transparent;
                color: #fff;
                border: 2px solid #bfa84a;
                border-radius: 12px;
                transition: 
                  background 0.2s,
                  color 0.2s,
                  border-color 0.2s;
                box-shadow: none;
                font-size: 12px;
                padding: 0.25rem 1.1rem;
                min-height: 28px;
                min-width: 90px;
              }
              .solution-card:hover .view-details-btn,
              .solution-card:focus-visible .view-details-btn {
                background: linear-gradient(90deg, #0BFFD3 0%, #3070DE 100%);
                color: #fff;
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
                className="solution-card group relative rounded-[18px] overflow-hidden min-w-[370px] max-w-[410px] w-[92vw] sm:w-[410px] min-h-[440px] flex-shrink-0 flex flex-col"
                style={{
                  height: "440px",
                  scrollSnapAlign: "start",
                }}
              >
                {/* Card image */}
                <div className="w-full h-[210px] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
                {/* Card content */}
                <div className="flex flex-col flex-1 px-6 py-5">
                  <h3 className="font-reem text-[18px] md:text-[20px] text-white font-normal leading-tight mb-2">
                    {it.title}
                  </h3>
                  <p className="font-inter text-[14px] md:text-[15px] text-gray-300 leading-[1.6] mb-6 line-clamp-3">
                    {it.desc}
                  </p>
                  <div className="mt-auto flex items-end justify-end">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        openModal(it);
                      }}
                      className="view-details-btn shadow-md transition-all duration-200 focus:outline-none"
                    >
                      View Details
                    </button>
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
