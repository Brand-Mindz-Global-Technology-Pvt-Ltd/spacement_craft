import React from 'react';

const MissionImage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center mt-16">
            {/* Image Section */}
            <div className="w-full flex justify-center">
                <div className="w-full max-w-7xl rounded-lg overflow-hidden shadow-lg border border-[#222826] bg-[#0a0a1a]">
                    <img
                        src="/assets/missionai.webp"
                        alt="VARSHAAI Heart Wave"
                        className="w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[520px] object-cover object-center"
                        draggable={false}
                        style={{ background: "#0a0a1a" }}
                    />
                </div>
            </div>
            {/* Description Section */}
            <div className="w-full max-w-7xl mt-4 sm:mt-8 px-2 sm:px-4">
                <p className="text-white/80 text-[12px] sm:text-sm md:text-base font-inter mb-2 leading-relaxed text-justify">
                    Our journey began with the successful launch of the EP LEO-01 experimental payload in 
2026, a milestone that marked our entry into orbital missions. As we grow, our vision is to 
deploy a constellation of satellites by 2030, strengthening global communication, Earth 
observation, and deep-space data access. 

As we move forward, our mission expands toward building the world’s first off-planet data 
infrastructure, developing lunar landing systems, and enabling sustainable space 
operations for future generations. Every mission we undertake is focused on strengthening 
India’s presence in space and making space technology accessible, scalable, and impactful 
for all 
                </p>
            </div>
        </div>
    );
};

export default MissionImage;
