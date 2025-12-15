import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useLocation } from 'react-router-dom';
import VisionHero from '../../components/vision/VisionHero';
import VisionCard from '../../components/vision/VisionCard';
import Footer from '../../components/Footer';
import { visionSections } from '../../data/visionData';

const Vission: React.FC = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate relative scroll position within the container
      // We want to know how far we are into the "stacking" phase
      // The container starts at rect.top
      // When rect.top is 0, we are at the start of the first card
      // When rect.top is -viewportHeight, we are at the start of the second card (it's fully covering first)

      const relativeScroll = -rect.top;

      const newProgress = visionSections.map((_, index) => {
        // The "active" zone for card[i] is when the scroll is between i*vh and (i+1)*vh
        // But specifically for the grayscale effect:
        // Card[i] should fade out as Card[i+1] covers it.
        // This happens when scroll goes from i*vh to (i+1)*vh.

        const start = index * viewportHeight;
        const end = (index + 1) * viewportHeight;

        if (relativeScroll < start) return 0;
        if (relativeScroll > end) return 1;
        return (relativeScroll - start) / viewportHeight;
      });

      setScrollProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <VisionHero />

      {/* 
        Main Stack Container 
        Height needs to be enough to accommodate scrolling through all cards.
        Each card takes 1 viewport height to "clear" / "cover".
        So total height = (Number of Cards) * 100vh + maybe some buffer?
        Actually, standard sticky stack:
        Wrapper 1: top:0, height: 100vh.
        Wrapper 2: top:0, height: 100vh.
        They naturally stack in DOM.
        If we want them to scroll *over* each other, we need space.
        If we just put them in a flow, they are 100vh each.
        So the container is naturally N * 100vh.
      */}
      <div
        ref={containerRef}
        className="relative w-full mx-auto"
      >
        {visionSections.map((section, index) => (
          <div
            key={section.id}
            className="sticky top-[-10vh] lg:top-0 min-h-[120vh] lg:h-screen flex items-center justify-center px-4 sm:px-8 lg:px-12 overflow-hidden"
            style={{
              zIndex: index + 1, // Higher index = on top
            }}
          >
            <VisionCard
              id={section.id}
              title={section.title}
              subtitle={section.subtitle}
              description={section.description}
              imageSrc={section.imageSrc}
              imageAlt={section.imageAlt}
              imagePosition={section.imagePosition}
              index={index}
              scrollProgress={scrollProgress[index]}
              totalCards={visionSections.length}
            />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Vission;
