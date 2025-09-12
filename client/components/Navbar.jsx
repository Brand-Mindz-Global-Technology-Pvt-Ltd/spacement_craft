import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-10 py-6 flex justify-between items-center">
      {/* Logo */}
      <div className="text-teal-400 font-bold text-lg tracking-wide">
        SPACEMANCRAFT
      </div>

      {/* Menu */}
      <ul className="flex space-x-8 text-white font-medium">
        <li className="hover:text-teal-400 cursor-pointer">Home</li>
        <li className="hover:text-teal-400 cursor-pointer">Product</li>
        <li className="hover:text-teal-400 cursor-pointer">Solution</li>
        <li className="hover:text-teal-400 cursor-pointer">Mission</li>
        <li className="hover:text-teal-400 cursor-pointer">Vision</li>
        <li className="hover:text-teal-400 cursor-pointer">About us</li>
        <li className="hover:text-teal-400 cursor-pointer">Career</li>
      </ul>
    </nav>
  );
};

export default Navbar;
