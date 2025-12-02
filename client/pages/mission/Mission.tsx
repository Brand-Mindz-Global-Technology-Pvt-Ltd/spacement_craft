import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MissionHero from '../../components/mission/MissionHero';
import MissionDescription from '../../components/mission/MissionDescription';
import MissionTimeline from '../../components/mission/MissionTimeline';
import MissionImage from '../../components/mission/MissionImage';

const Mission: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <MissionHero />
      <MissionDescription />
      <MissionTimeline />
      <MissionImage />
      <Footer />
    </div>
  );
};

export default Mission;
