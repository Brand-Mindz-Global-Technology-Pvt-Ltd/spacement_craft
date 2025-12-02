import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CareerHero from '@/components/career/CareerHero';
import TopSection from '@/components/career/TopSection';
import MainSection from '@/components/career/MainSection';

const Career: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <CareerHero />
      <TopSection />
      <MainSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Career;
