import React, { useState } from 'react';

const MissionTimeline = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideTimeline = (direction: number) => {
        const maxIndex = 4; // 5 cards total (0, 1, 2, 3, 4)
        const newIndex = Math.min(Math.max(currentIndex + direction, 0), maxIndex);
        setCurrentIndex(newIndex);
    };

    const timelineSteps = [
        "Incubated at Crescent Innovation and Incubation Council",
        "Mission Planning and Orbital Mechanics using simulation softwares available at IN-SPACe",
        "Building mobile applications with existing satellite data from VEDAS & BHUVAN",
        "Advanced satellite constellation deployment and orbital maintenance protocols",
        "Commercial space operations and interplanetary mission capabilities"
    ];

    return (
        <div className="max-w-7xl mx-auto px-0 mt-8 relative">
            {/* Scrollable Container */}
            <div className="overflow-hidden w-full">
                <div
                    className="flex items-center transition-transform duration-500"
                    style={{ transform: `translateX(${-currentIndex * 360}px)` }}
                >
                    {timelineSteps.map((text, index) => {
                        const isActive = index === currentIndex;

                        return (
                            <div
                                key={index}
                                className={`
                  relative flex-shrink-0 w-[360px] h-[200px] mx-4
                  rounded-lg text-left flex items-center justify-center group
                  border shadow-lg
                  ${isActive
                                        ? "bg-gradient-to-br from-[#1de9b6]/30 via-[#00bfae]/20 to-[#181c1b] border-teal-400/60 shadow-[0_0_24px_2px_rgba(29,233,182,0.25)]"
                                        : "bg-[#181c1b] border-[#222826]"
                                    }
                `}
                            >
                                <div className="h-16 w-[3px] bg-white/40 ml-3 mr-4"></div>

                                <span
                                    className={`
                    text-sm font-inter text-center px-4
                    ${isActive ? "text-teal-200 font-semibold md:text-base" : "text-white/80"}
                  `}
                                >
                                    {text}
                                </span>

                                {/* Dotted line */}
                                {index < 4 && (
                                    <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-10 border-t-2 border-dotted border-white/30 hidden md:block"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end gap-3 mt-6">
                <button
                    onClick={() => slideTimeline(-1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black border border-gray-500 text-gray-400 hover:border-teal-400"
                >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button
                    onClick={() => slideTimeline(1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black border border-teal-400 text-teal-400 hover:bg-teal-500/10"
                >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M9 6l6 6-6 6" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default MissionTimeline;
