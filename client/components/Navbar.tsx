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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Solution", path: "/solution" },
    { name: "Mission", path: "/mission" },
    { name: "Vision", path: "/vission" },
    { name: "About us", path: "/about" },
    { name: "Career", path: "/career" },
    { name: "Contact us", path: "/contactus" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg py-3 sm:py-4 lg:py-5' : 'bg-transparent'
      }`}>
        
        {/* Logo: Structure for image and text */}
        <div 
          className="flex flex-col items-start cursor-pointer z-[100]"
          onClick={handleLogoClick}
        >
          <img src="/assets/01-logo.jpg" alt="Spacemancraft Logo" className="h-10 sm:h-10 lg:h-14 w-auto" />
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-10 text-white text-sm font-teachers">
          {navItems.map((item) => (
            <li 
              key={item.path}
              className={`cursor-pointer pb-1 font-teachers transition-colors ${
                location.pathname === item.path 
                  ? "border-b-2 border-cyan-400 text-cyan-400" 
                  : "hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
              }`}
              onClick={() => handleNavClick(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-[100]"
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
      </nav>

      {/* Mobile Menu Overlay - Moved OUTSIDE nav to prevent clipping by backdrop-filter */}
      <div className={`fixed inset-0 bg-black transition-opacity duration-500 lg:hidden z-[90] ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Star Background */}
        <div 
          className="absolute inset-0 bg-[url('/assets/23326.jpg')] bg-cover bg-center opacity-50"
          aria-hidden="true"
        />
        
        {/* Menu Content */}
        <div className="relative flex flex-col items-center justify-center h-full space-y-8 p-4">
          {/* Close button commented out as per user request */}
          {/* <button
            onClick={closeMobileMenu}
            className="absolute top-6 right-6 text-white text-2xl z-50"
            aria-label="Close mobile menu"
          >
            ×
          </button> */}
          <ul className="flex flex-col items-center space-y-6 text-white font-teachers w-full max-w-md">
            {navItems.map((item, index) => (
              <li 
                key={item.path}
                className={`w-full text-center cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === item.path 
                    ? "text-cyan-400 font-bold" 
                    : "text-white hover:text-cyan-300"
                }`}
                style={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 50}ms`
                }}
                onClick={() => handleNavClick(item.path)}
              >
                <span className="text-lg sm:text-xl block py-1 border-b border-white/10 hover:border-cyan-400/50 transition-colors">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;