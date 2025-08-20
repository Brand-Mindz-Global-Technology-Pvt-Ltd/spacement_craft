import React from 'react';

// 1. IMPORT YOUR IMAGES
// Make sure to replace these paths with the actual paths to your images in your project folder.
import EarthBackground from '/assets/03-orbiting-earth.png'; // Replace with your background image
    // Replace with your product image

const OurProductSection = () => (
  // Use the imported image for the background style
  <section
    className="relative h-screen bg-black flex flex-col items-center justify-center overflow-hidden bg-cover bg-center"
    style={{ backgroundImage: `url(${EarthBackground})` }}
  >
    {/* Background overlays for visual effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50"></div>
    <div className="absolute inset-0 bg-black opacity-20"></div>

    {/* Container for all centered content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
      
      {/* 1. Heading: Increased bottom margin for better visual separation. */}
      <h2 className="font-reem text-5xl md:text-7xl font-normal text-white uppercase tracking-[2px] mb-6">
        Our Product
      </h2>
      
      {/* 2. Tagline: Made text italic and removed the quotation marks to match the style in the image. Increased bottom margin. */}
      <p className="font-inter text-xl md:text-2xl text-white mb-8 italic">
        Powering the Future From the Moon
      </p>
      
      {/* 3. Description: Reduced max-width for a narrower text block and adjusted line-height for readability, which better matches the image. */}
      <p className="font-inter text-base md:text-lg text-white max-w-3xl leading-relaxed">
        SpacemanCraft is on a mission to build the first-ever lunar data
        center—reshaping how the world thinks about infrastructure,
        connectivity, and the cosmos. Welcome to the future of data, built in
        space.
      </p>
    </div>
  </section>
);

export default OurProductSection;