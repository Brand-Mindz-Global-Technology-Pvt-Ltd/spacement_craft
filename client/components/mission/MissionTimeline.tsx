import React, { useState, useRef, useEffect } from "react";

const MissionTimeline = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(360);
    const cardRef = useRef<HTMLDivElement>(null);

    const timelineSteps = [
        "2026 – EP LEO-01 Experimental Payload Launch We successfully launched our first experimental payload, EP LEO-01, marking a major breakthrough in our journey toward next-generation space technology",
        "2029 — Orbital deployment of satellites Deployment of multiple satellites constellations equipped with our propulsion platform",
        "2031 - Lunar Landing Accomplish our first lunar landing, extending our capabilities beyond Earth orbit",
        "2035 – Lunar Data Center Build and operate a Lunar Data Center, laying the digital foundation for future lunar industry",
        // "Commercial space operations and interplanetary mission capabilities"
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
        <div className="max-w-7xl mx-auto px-0 mt-8 relative" style={{
            backgroundImage: "url('/assets/StarAnimate.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>

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
    rounded-lg flex items-center justify-start relative overflow-hidden
    border shadow-lg transition-all duration-300

    ${isActive
                                            ? "border-[#FEC053] shadow-[0_0_24px_2px_rgba(254,192,83,0.15)]"
                                            : "bg-[#181c1b] border-[#222826]"
                                        }
  `}
                                    style={isActive ? {
                                        background: "radial-gradient(circle, rgba(11, 255, 211, 0.4) 0%, rgba(24, 28, 27, 0.8) 100%)"
                                    } : {}}
                                >
                                    {/* Active Card Overlays */}
                                    {isActive && (
                                        <>
                                            {/* Left Teal Accent Bar */}
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 h-[60%] w-[3px] bg-[#0BFFD3] shadow-[0_0_10px_#0BFFD3] z-10 rounded-full"></div>
                                        </>
                                    )}

                                    <span
                                        className={`
      text-[11px] sm:text-[13px] md:text-[15px] px-8 text-left relative z-10 font-reem
      ${isActive ? "text-white font-normal tracking-wide" : "text-white/80"}
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
