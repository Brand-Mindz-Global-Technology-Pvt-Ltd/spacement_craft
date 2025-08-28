import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/assets/01-logo.jpg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/product", label: "Product" },
    { path: "/solution", label: "Solution" },
    { path: "/mission", label: "Mission" },
    { path: "/vision", label: "Vision" },
    { path: "/about", label: "About us" },
    { path: "/career", label: "Career" },
  ];

  const navBase =
    "uppercase tracking-[0.12em] text-xs md:text-sm text-white/90 hover:text-white transition-colors pb-2";
  const active = "border-b-2 border-white";

  return (
    <header className="w-full py-8 md:py-10">
      <div className="mx-auto flex items-center justify-between px-6 md:px-8" style={{ maxWidth: 1280 }}>
        {/* Logo (left) */}
        <NavLink to="/" onClick={() => setIsMenuOpen(false)} aria-label="Home">
          <img src={Logo} alt="SpacemanCraft Logo" className="h-8 md:h-10 w-auto" />
        </NavLink>

        {/* Desktop nav (right) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `${navBase} ${isActive ? active : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/95 pt-24 z-50">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `text-2xl ${navBase} ${isActive ? active : ""}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
