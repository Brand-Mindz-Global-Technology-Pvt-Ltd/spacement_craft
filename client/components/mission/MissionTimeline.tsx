import React, { useState, useRef, useEffect } from "react";

const MissionTimeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(360);
  const cardRef = useRef<HTMLDivElement>(null);

  const timelineSteps = [
    "Incubated at Crescent Innovation and Incubation Council",
    "Mission Planning and Orbital Mechanics using simulation softwares available at IN-SPACe",
    "Building mobile applications with existing satellite data from VEDAS & BHUVAN",
    "Advanced satellite constellation deployment and orbital maintenance protocols",
    "Commercial space operations and interplanetary mission capabilities"
  ];

  // Measure card width correctly
useEffect(() => {
  const updateSize = () => {
    if (cardRef.current) {
      const width = cardRef.current.getBoundingClientRect().width;

      // Add the horizontal gap between cards (mobile has gap-3)
      const gap = window.innerWidth < 768 ? 12 : 16;

      setCardWidth(width + gap);
    }
  };

  updateSize();
  window.addEventListener("resize", updateSize);
  return () => window.removeEventListener("resize", updateSize);
}, []);



  const slideTimeline = (dir: number) => {
    const max = timelineSteps.length;
    setCurrentIndex((currentIndex + dir + max) % max);
  };

  return (
    <div className="max-w-7xl mx-auto px-0 mt-8 relative">

      {/* Scroll wrapper */}
      <div className="overflow-hidden w-full">
<div
  className="flex items-center gap-x-3 transition-transform duration-500 pl-4 md:pl-0"
  style={{
    transform: `translateX(-${currentIndex * cardWidth}px)`
  }}
>

          {timelineSteps.map((text, index) => {
            const isActive = index === currentIndex;

            return (
              <React.Fragment key={index}>
                {/* CARD */}
<div
  ref={index === 0 ? cardRef : null}
  className={`
    flex-shrink-0
    w-[calc(100vw-48px)] sm:w-[calc(100vw-60px)] md:w-[360px]
    h-[150px] md:h-[200px]
    mx-0 md:mx-4
    rounded-lg flex items-center justify-center
    border shadow-lg

    ${isActive
      ? "bg-gradient-to-br from-[#1de9b6]/30 via-[#00bfae]/20 to-[#181c1b] border-teal-400/60 shadow-[0_0_24px_2px_rgba(29,233,182,0.25)]"
      : "bg-[#181c1b] border-[#222826]"
    }
  `}
>
  <span
    className={`
      text-xs sm:text-sm md:text-base px-3 text-center
      ${isActive ? "text-teal-200 font-semibold" : "text-white/80"}
    `}
  >
    {text}
  </span>
</div>
                {/* Desktop dotted line (mobile hidden) */}
                {index < timelineSteps.length - 1 && (
                  <div className="hidden md:block flex-shrink-0 w-20 border-t-2 border-dotted border-white/30 self-center"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-6">
        <button onClick={() => slideTimeline(-1)}>
          <img
            src="assets/mission/ion_caret-forward-sharp.png"
            className="w-6 h-6"
            style={{ transform: "rotate(180deg)" }}
          />
        </button>

        <button onClick={() => slideTimeline(1)}>
          <img
            src="assets/mission/ion_caret-forward-sharp.png"
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
};

export default MissionTimeline;
