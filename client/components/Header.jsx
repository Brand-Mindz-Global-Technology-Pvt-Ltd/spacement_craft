import React, { useState } from 'react';
// Use NavLink for automatic active-style handling
import { NavLink } from 'react-router-dom'; 

// Make sure you have an image for your logo
import Logo from '/assets/01-logo.jpg'; 

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Reusable style for nav links for consistency
  const navLinkClasses = "text-white text-base hover:text-gray-300 transition-colors pb-1";
  const activeLinkClasses = "border-b-2 border-white font-semibold";

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <NavLink to="/">
          {/* Using an imported logo is better practice */}
          <img
            src={Logo} 
            alt="SpacemanCraft Logo"
            className="w-auto h-12" // Adjusted size for a more standard header logo
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Using NavLink to style the active route */}
          <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>
            Home
          </NavLink>
          <NavLink to="/product" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>
            Product
          </NavLink>
          <NavLink to="/solution" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>
            Solution
          </NavLink>
          <NavLink to="/mission" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>
            Mission
          </NavLink>
          <NavLink to="/vision" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>
            Vision
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>
            About us
          </NavLink>
          <NavLink to="/career" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>
            Career
          </NavLink>
        </nav>

        {/* Mobile Menu Button remains the same */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* SVG icon... */}
        </button>
      </div>

      {/* Mobile Navigation can also be updated with NavLink if desired */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm">
          {/* Mobile nav links... */}
        </div>
      )}
    </header>
  );
};