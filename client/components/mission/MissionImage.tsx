import React from 'react';

const MissionImage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center mt-16">
            {/* Image Section */}
            <div className="w-full flex justify-center">
                <div className="w-full max-w-7xl rounded-lg overflow-hidden shadow-lg border border-[#222826] bg-[#0a0a1a]">
                    <img
                        src="/assets/varsaai.png"
                        alt="VARSHAAI Heart Wave"
                        className="w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[520px] object-cover object-center"
                        draggable={false}
                        style={{ background: "#0a0a1a" }}
                    />
                </div>
            </div>
            {/* Description Section */}
            <div className="w-full max-w-7xl mt-4 sm:mt-8 px-2 sm:px-4">
                <p className="text-white/80 text-xs sm:text-sm md:text-base font-inter mb-2 leading-relaxed">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    );
};

export default MissionImage;
