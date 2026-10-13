import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandMark from "../common/BrandMark";
import { navLinks } from "../../constants/siteData";

export function Navbar({ onOpenInterest }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
      className={`fixed top-0 left-0 w-full z-40 flex items-center justify-between text-white transition-all duration-500 ${
        scrolled
          ? "py-3.5 px-6 md:px-[5vw] bg-[#1d120e]/95 backdrop-blur-md border-b border-gold/20 shadow-xl"
          : "py-6 sm:py-7 px-6 md:px-[5vw] bg-transparent"
      }`}
      data-testid="site-navigation"
    >
      <BrandMark />

      {/* Navigation Links (Desktop & Mobile Dropdown) */}
      <div
        className={`${
          menuOpen
            ? "flex absolute top-[72px] left-4 right-4 flex-col items-stretch p-6 gap-5 bg-terracotta-dark shadow-2xl rounded border border-gold/20 z-50 md:static md:top-auto md:left-auto md:right-auto md:flex-row md:items-center md:p-0 md:bg-transparent md:shadow-none md:border-none md:gap-8"
            : "hidden md:flex md:items-center md:gap-8"
        } text-[11px] font-sans font-semibold tracking-wider uppercase`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="relative py-1 text-white hover:text-gold transition-colors duration-300 group inline-block"
            data-testid={link.testId}
          >
            {link.label}
            <span className="hidden md:block absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-3 bg-white text-ink hover:bg-bone hover:text-terracotta font-sans font-semibold text-[11px] uppercase tracking-wider px-4 py-3 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          onClick={handleInterestClick}
          data-testid="nav-interest-button"
        >
          Register your interest <ArrowUpRight size={16} />
        </motion.button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden bg-transparent border-0 text-white p-2 cursor-pointer transition-transform duration-200 hover:scale-110"
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
