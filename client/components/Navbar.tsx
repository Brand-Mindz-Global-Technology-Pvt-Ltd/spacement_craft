import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-12 py-8 flex justify-between items-center">
      
      {/* Logo: Structure for image and text */}
      <div className="flex flex-col items-start">
        {/* 🔹 FINAL CHANGE: Reduced logo size */}
        <img src="/assets/01-logo.jpg" alt="Spacemancraft Logo" className="h-12 w-auto" />
      </div>

      {/* Navigation Menu with Teachers Font */}
      <ul className="flex space-x-10 text-white text-sm font-teachers">
        <li className="cursor-pointer border-b-2 border-white pb-1 font-teachers">
          Home
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors font-teachers">
          Product
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors font-teachers">
          Solution
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors font-teachers">
          Mission
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors font-teachers">
          Vision
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors font-teachers">
          About us
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors font-teachers">
          Career
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;