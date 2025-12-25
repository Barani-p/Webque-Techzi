import React, { useState, useEffect } from "react";
import { WebqueTechziLogo } from "./Icons";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about-us" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact-us" },
  ];

  return (
    <header
      className={`py-5 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <WebqueTechziLogo className="h-8 w-auto" />

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex items-center space-x-1 p-1.5 rounded-full transition-colors duration-300 ${
            isScrolled
              ? ""
              : "bg-black/30 backdrop-blur-md border border-white/10"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-2 px-6 rounded-full hover:opacity-90 transition-all duration-300">
          Get Started
        </button>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          className="md:hidden text-white hover:text-blue-400 transition-colors duration-300"
        >
          {!menuOpen ? (
            // Hamburger
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            // Close (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-black/90 backdrop-blur-md rounded-xl p-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md hover:bg-white/10"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-2 px-6 rounded-full hover:opacity-90 transition-all duration-300">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
