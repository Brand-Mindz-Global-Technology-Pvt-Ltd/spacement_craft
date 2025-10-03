import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    closeMobileMenu();
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    closeMobileMenu();
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 flex justify-between items-center transition-all duration-300 ${
      isScrolled ? ' backdrop-blur-sm' : 'bg-transparent'
    }`}>
      
      {/* Logo: Structure for image and text */}
      <div 
        className="flex flex-col items-start cursor-pointer"
        onClick={handleLogoClick}
      >
        <img src="/assets/01-logo.jpg" alt="Spacemancraft Logo" className="h-8 sm:h-10 lg:h-12 w-auto" />
      </div>

      {/* Desktop Navigation Menu */}
      <ul className="hidden lg:flex space-x-6 xl:space-x-10 text-white text-sm font-teachers">
        <li 
          className={`cursor-pointer pb-1 font-teachers transition-colors ${
            location.pathname === "/" 
              ? "border-b-2 border-cyan-400 text-cyan-400" 
              : "hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
          }`}
          onClick={() => handleNavClick("/")}
        >
          Home
        </li>
        <li 
          className={`cursor-pointer pb-1 font-teachers transition-colors ${
            location.pathname === "/product" 
              ? "border-b-2 border-cyan-400 text-cyan-400" 
              : "hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
          }`}
          onClick={() => handleNavClick("/product")}
        >
          Product
        </li>
        <li 
          className={`cursor-pointer pb-1 font-teachers transition-colors ${
            location.pathname === "/solution" 
              ? "border-b-2 border-cyan-400 text-cyan-400" 
              : "hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
          }`}
          onClick={() => handleNavClick("/solution")}
        >
          Solution
        </li>
        <li 
          className={`cursor-pointer pb-1 font-teachers transition-colors ${
            location.pathname === "/mission" 
              ? "border-b-2 border-cyan-400 text-cyan-400" 
              : "hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
          }`}
          onClick={() => handleNavClick("/mission")}
        >
          Mission
        </li>
        <li 
          className={`cursor-pointer pb-1 font-teachers transition-colors ${
            location.pathname === "/vission" 
              ? "border-b-2 border-cyan-400 text-cyan-400" 
              : "hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
          }`}
          onClick={() => handleNavClick("/vission")}
        >
          Vision
        </li>
        <li 
          className={`cursor-pointer pb-1 font-teachers transition-colors ${
            location.pathname === "/about" 
              ? "border-b-2 border-cyan-400 text-cyan-400" 
              : "hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
          }`}
          onClick={() => handleNavClick("/about")}
        >
          About us
        </li>
        <li 
          className={`cursor-pointer pb-1 font-teachers transition-colors ${
            location.pathname === "/career" 
              ? "border-b-2 border-cyan-400 text-cyan-400" 
              : "hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
          }`}
          onClick={() => handleNavClick("/career")}
        >
          Career
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        aria-label="Toggle mobile menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
          isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
        }`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-0' : ''
        }`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
          isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
        }`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm lg:hidden z-40">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={closeMobileMenu}
              className="absolute top-6 right-6 text-white text-2xl"
              aria-label="Close mobile menu"
            >
              ×
            </button>
            
            <ul className="flex flex-col items-center space-y-6 text-white text-lg font-teachers">
              <li 
                className={`cursor-pointer pb-1 font-teachers transition-colors ${
                  location.pathname === "/" 
                    ? "border-b-2 border-cyan-400 text-cyan-400" 
                    : "hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
                }`}
                onClick={() => handleNavClick("/")}
              >
                Home
              </li>
              <li 
                className={`cursor-pointer pb-1 font-teachers transition-colors ${
                  location.pathname === "/product" 
                    ? "border-b-2 border-cyan-400 text-cyan-400" 
                    : "hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
                }`}
                onClick={() => handleNavClick("/product")}
              >
                Product
              </li>
              <li 
                className={`cursor-pointer pb-1 font-teachers transition-colors ${
                  location.pathname === "/solution" 
                    ? "border-b-2 border-cyan-400 text-cyan-400" 
                    : "hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
                }`}
                onClick={() => handleNavClick("/solution")}
              >
                Solution
              </li>
              <li 
                className={`cursor-pointer pb-1 font-teachers transition-colors ${
                  location.pathname === "/mission" 
                    ? "border-b-2 border-cyan-400 text-cyan-400" 
                    : "hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
                }`}
                onClick={() => handleNavClick("/mission")}
              >
                Mission
              </li>
              <li 
                className={`cursor-pointer pb-1 font-teachers transition-colors ${
                  location.pathname === "/vission" 
                    ? "border-b-2 border-cyan-400 text-cyan-400" 
                    : "hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
                }`}
                onClick={() => handleNavClick("/vission")}
              >
                Vision
              </li>
              <li 
                className={`cursor-pointer pb-1 font-teachers transition-colors ${
                  location.pathname === "/about" 
                    ? "border-b-2 border-cyan-400 text-cyan-400" 
                    : "hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
                }`}
                onClick={() => handleNavClick("/about")}
              >
                About us
              </li>
              <li 
                className={`cursor-pointer pb-1 font-teachers transition-colors ${
                  location.pathname === "/career" 
                    ? "border-b-2 border-cyan-400 text-cyan-400" 
                    : "hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
                }`}
                onClick={() => handleNavClick("/career")}
              >
                Career
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;