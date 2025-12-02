import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import SolutionHero from "../../components/solution/SolutionHero";
import EarthObservation from "../../components/solution/EarthObservation";
import DataCenter from "../../components/solution/DataCenter";
import Footer from "../../components/Footer";
import SolutionModal from "../../components/solution/SolutionModal";
import { SolutionItem } from "../../components/solution/solutionData";

const Solution = () => {
  const [selectedItem, setSelectedItem] = useState<SolutionItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = (item: SolutionItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    setIsAnimating(true);
  };

  const closeModal = () => {
    setIsAnimating(false);
    // Delay hiding the modal to allow close animation to complete
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedItem(null);
    }, 200);
  };

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <SolutionHero />
      <EarthObservation openModal={openModal} />
      <DataCenter />
      <Footer />
      <SolutionModal
        isOpen={isModalOpen}
        selectedItem={selectedItem}
        isAnimating={isAnimating}
        onClose={closeModal}
      />
    </div>
  );
};

export default Solution;
