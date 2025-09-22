import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-12 py-8 flex justify-between items-center">
      
      {/* Logo: Structure for image and text */}
      <div className="flex flex-col items-start">
        {/* 🔹 FINAL CHANGE: Reduced logo size */}
        <img src="/assets/01-logo.jpg" alt="Spacemancraft Logo" className="h-12 w-auto" />
     
      </div>

      {/* 🔹 FINAL CHANGE: Reduced menu font size for a cleaner look */}
      <ul className="flex space-x-10 text-white font-normal text-sm">
        <li className="cursor-pointer border-b-2 border-white pb-1">
          Home
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors">
          Product
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors">
          Solution
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors">
          Mission
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors">
          Vision
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors">
          About us
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-colors">
          Career
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;