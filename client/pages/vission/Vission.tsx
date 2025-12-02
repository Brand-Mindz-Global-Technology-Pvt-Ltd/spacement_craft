import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useLocation } from 'react-router-dom';
import VisionHero from '../../components/vision/VisionHero';
import VisionCard from '../../components/vision/VisionCard';
import Footer from '../../components/Footer';
import { visionSections } from '../../data/visionData';

const Vission: React.FC = () => {
  const location = useLocation();

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

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <VisionHero />

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {visionSections.map((section) => (
          <VisionCard
            key={section.id}
            id={section.id}
            title={section.title}
            subtitle={section.subtitle}
            description={section.description}
            imageSrc={section.imageSrc}
            imageAlt={section.imageAlt}
            imagePosition={section.imagePosition}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Vission;
