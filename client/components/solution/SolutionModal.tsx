import React from "react";
import { SolutionItem } from "./solutionData";

interface SolutionModalProps {
  isOpen: boolean;
  selectedItem: SolutionItem | null;
  isAnimating: boolean;
  onClose: () => void;
}

const SolutionModal: React.FC<SolutionModalProps> = ({
  isOpen,
  selectedItem,
  isAnimating,
  onClose,
}) => {
  if (!isOpen || !selectedItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dark semi-transparent background */}
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-200 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      {/* Popup Modal Content */}
      <div
        className={`relative z-10 flex flex-col md:flex-row w-[96vw] max-w-2xl bg-[#23272e] rounded-lg border border-gray-700/60 shadow-2xl overflow-hidden transition-all duration-200 ${
          isAnimating
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4'
        }`}
        style={{
          minHeight: '320px',
          maxHeight: '90vh',
        }}
      >
        {/* Left: Image */}
        <div className="md:w-[44%] w-full flex-shrink-0 bg-black/60 flex items-center justify-center p-0 md:p-0">
          <img
            src={selectedItem.img}
            alt={selectedItem.title}
            className="w-full h-full object-cover object-center"
            style={{
              minHeight: '220px',
              maxHeight: '350px',
              borderTopLeftRadius: '0.5rem',
              borderBottomLeftRadius: '0.5rem',
            }}
            draggable={false}
          />
        </div>
        {/* Right: Content */}
        <div className="relative flex-1 flex flex-col px-5 py-4 md:py-6 md:px-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 w-7 h-7  rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Close"
            tabIndex={0}
          >
            ×
          </button>
          {/* Title */}
          <h3 className="font-reem text-lg md:text-xl font-semibold text-white mb-2 tracking-wide">
            {selectedItem.title}
          </h3>
          {/* Description */}
          <div className="text-white/90 font-inter text-xs md:text-sm leading-relaxed mb-4 flex-1 overflow-y-auto pr-1">
            <p className="text-justify whitespace-pre-line">
              {selectedItem.desc}
            </p>
          </div>
          {/* Example: Tag Buttons (if present in item) */}
          {selectedItem.tags && Array.isArray(selectedItem.tags) && (
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedItem.tags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-block bg-blue-700/90 text-white text-xs px-3 py-1 rounded-md font-semibold shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolutionModal;
