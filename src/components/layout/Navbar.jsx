import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandMark from "../common/BrandMark";
import CubeButton from "../common/CubeButton";
import { navLinks } from "../../constants/siteData";

export function Navbar({ onOpenInterest }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleInterestClick = () => {
    closeMenu();
    if (onOpenInterest) onOpenInterest();
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 left-0 w-full z-40 flex items-center justify-between text-ink transition-all duration-300 ${
        scrolled
          ? "py-2.5 sm:py-2 px-6 md:px-[5vw] bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-md"
          : "py-3.5 sm:py-3 px-6 md:px-[5vw] bg-transparent border-b border-transparent shadow-none"
      }`}
      data-testid="site-navigation"
    >
      <BrandMark scrolled={scrolled} />

      {/* Navigation Links (Desktop & Mobile Dropdown) */}
      <div
        className={`${
          menuOpen
            ? "flex absolute top-[68px] left-4 right-4 flex-col items-stretch p-6 gap-5 bg-white text-ink shadow-2xl rounded-2xl border border-line z-50 md:static md:top-auto md:left-auto md:right-auto md:flex-row md:items-center md:p-0 md:bg-transparent md:shadow-none md:border-none md:gap-8"
            : "hidden md:flex md:items-center md:gap-8"
        } text-[11px] font-sans font-semibold tracking-wider uppercase`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="relative py-1 text-ink/80 hover:text-terracotta transition-colors duration-300 group inline-block"
            data-testid={link.testId}
          >
            {link.label}
            <span className="hidden md:block absolute bottom-0 left-0 w-0 h-[2px] bg-terracotta transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
        <CubeButton
          frontText="Register your interest"
          topText="Join Our Cause"
          frontIcon={<ArrowUpRight size={16} />}
          topIcon={<ArrowUpRight size={16} />}
          onClick={handleInterestClick}
          styleVariant="navbar"
          dataTestId="nav-interest-button"
        />
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden bg-transparent border-0 text-ink hover:text-terracotta p-2 cursor-pointer transition-transform duration-200 hover:scale-110"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        data-testid="mobile-menu-button"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </motion.header>
  );
}

export default Navbar;
