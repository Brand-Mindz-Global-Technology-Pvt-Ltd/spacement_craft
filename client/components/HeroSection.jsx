import React from 'react';
import { Header } from './Header';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

// This is the correct path for your project structure.
const heroImageUrl = '/assets/02-earth-hero.jpg';

export const HeroSection = () => (
  <section
    className="relative h-screen bg-black flex flex-col justify-start pt-48 items-center overflow-hidden bg-cover bg-no-repeat bg-bottom"
    style={{ backgroundImage: `url('${heroImageUrl}')` }}
  >
    {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
    <Header />

    <div className="relative z-10 flex flex-col items-center text-center px-6 mt-8">
      <h1 className="text-5xl md:text-6xl font-bold text-white uppercase tracking-wider max-w-4xl mb-6">
        Revolutionizing Orbits
      </h1>
      <p className="text-base text-white/90 max-w-2xl mb-10 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <button className="border border-white px-8 py-3 text-white text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-colors">
        Discover Our Thruster
      </button>
    </div>

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
      <ChevronDownIcon className="w-8 h-8 text-white animate-bounce" />
    </div>
  </section>
);  