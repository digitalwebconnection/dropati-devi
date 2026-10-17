import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandMark, CubeButton } from "@/components/common";
import { navLinks } from "@/constants";
import { useScrollPosition, useKeydown, useBodyScrollLock } from "@/hooks";

export function Navbar({ onOpenInterest }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrolled } = useScrollPosition(20);

  const closeMenu = () => setMenuOpen(false);
  useKeydown("Escape", closeMenu, menuOpen);
  useBodyScrollLock(menuOpen);

  const handleInterestClick = () => {
    closeMenu();
    if (onOpenInterest) onOpenInterest();
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 left-0 w-full z-40 flex items-center justify-between transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-200/80 text-ink ${
          scrolled || menuOpen
            ? "py-2.5 sm:py-2 px-5 sm:px-6 md:px-[5vw] shadow-md"
            : "py-3 sm:py-2.5 px-5 sm:px-6 md:px-[5vw] shadow-sm"
        }`}
        data-testid="site-navigation"
      >
        <BrandMark />

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex md:items-center md:gap-8 text-[11px] font-sans font-semibold tracking-wider uppercase">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 font-sans font-bold transition-colors duration-300 group inline-block text-[#01236A]/85 hover:text-[#01236A]"
              data-testid={link.testId}
            >
              {link.label}
              <span className="hidden md:block absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFD900] transition-all duration-300 group-hover:w-full" />
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
          className={`md:hidden bg-transparent border-0 p-2 cursor-pointer transition-transform duration-200 hover:scale-110 flex items-center justify-center rounded-lg text-[#01236A] hover:text-[#FFD900] ${
            menuOpen ? "opacity-0 pointer-events-none" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          data-testid="mobile-menu-button"
        >
          <Menu size={26} />
        </button>
      </motion.header>

      {/* Mobile Side Drawer (White Theme) */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Side Drawer Panel */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-[82vw] max-w-[320px] sm:max-w-[340px] h-full h-[100dvh] bg-white text-slate-900 border-r border-slate-200/80 shadow-[12px_0_35px_rgba(0,0,0,0.12)] flex flex-col justify-between overflow-hidden"
              aria-label="Mobile Navigation"
            >
              {/* Drawer Top Bar */}
              <div className="flex items-center justify-between px-6 pt-[max(1.25rem,env(safe-area-inset-top))] pb-4 border-b border-slate-100">
                <a
                  href="#top"
                  onClick={closeMenu}
                  className="inline-flex items-center transition-opacity hover:opacity-85"
                  aria-label="Dropati Devi Foundation Home"
                >
                  <img
                    src="/logo.webp"
                    alt="Dropati Devi Foundation"
                    className="h-8 sm:h-9 w-auto object-contain"
                  />
                </a>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="text-slate-400 hover:text-slate-800 hover:bg-slate-100 active:bg-slate-200 p-2 -mr-2 rounded-xl transition-all duration-200 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={22} className="stroke-[2.2]" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-6 flex flex-col space-y-2 overflow-y-auto">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between px-3.5 py-3 -mx-3.5 rounded-xl text-slate-800 hover:text-[#01236A] hover:bg-blue-50/60 active:bg-blue-100/70 transition-all duration-200"
                    data-testid={`mobile-${link.testId}`}
                  >
                    <span className="font-sans font-semibold text-[16px] sm:text-[17px] tracking-normal group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-[#01236A] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </a>
                ))}
              </nav>

              {/* Bottom CTA Button */}
              <div className="p-6 pt-4 border-t border-slate-100 mt-auto bg-white pb-[max(1.5rem,env(safe-area-inset-bottom))]">
                <CubeButton
                  frontText="Register your interest"
                  topText="Join Our Cause"
                  frontIcon={<ArrowUpRight size={16} />}
                  topIcon={<ArrowUpRight size={16} />}
                  onClick={handleInterestClick}
                  styleVariant="primary"
                  className="!w-full"
                  autoHover
                  dataTestId="mobile-nav-interest-button"
                />
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
