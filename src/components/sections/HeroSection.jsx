import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Eyebrow, CubeButton } from "@/components/common";
import { siteImages } from "@/constants";

export function HeroSection() {
  const slides = siteImages.heroSlides;

  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Preload hero slide images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = encodeURI(slide.src);
    });
  }, [slides]);

  // Auto-advance slide every 4.5 seconds (paused when tab is hidden)
  useEffect(() => {
    const timer = setInterval(() => {
      if (typeof document !== "undefined" && document.hidden) return;
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNextSlide(); // swipe left -> next slide
    } else if (distance < -50) {
      handlePrevSlide(); // swipe right -> prev slide
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeSlide = slides[currentSlide];

  return (
    <section
      className="relative min-h-[680px] lg:min-h-screen text-white flex items-end overflow-hidden"
      id="top"
      data-testid="hero-section"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides with Auto-Swipe and Smooth Crossfade */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url("${encodeURI(activeSlide.src)}")`,
            }}
          />
        </AnimatePresence>

        {/* Ambient Overlay for crisp readability (Bottom-weighted gradient + Brand Blue Tint) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[#01236A]/20 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Main Hero Content (Positioned at bottom) */}
      <div className="relative z-10 max-w-[1180px] w-full px-5 md:px-8 mx-auto pt-24 sm:pt-32 pb-16 sm:pb-24 lg:pb-32">
        <div data-aos="fade-down" data-aos-duration="650">
          <Eyebrow text="A legacy of strength" light={true} />
        </div>

        <h1
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="50"
          className="max-w-7xl my-6 font-serif text-[42px] sm:text-[58px] lg:text-[66px] leading-[1.02] tracking-tight font-normal text-white"
        >
          HER STRENGTH LIVES ON.
          <br />
          <i className="text-[#FFD900] italic font-serif inline-block transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,217,0,0.45)]">
            HER LEGACY.
          </i>{" "}
          THEIR FUTURE.
        </h1>

        {/* Call to action cube buttons with 3-second auto-hover */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
          className="flex items-center gap-6 sm:gap-7 mt-9 flex-wrap"
        >
          <CubeButton
            href="#purpose"
            frontText="Explore Our Mission"
            topText="Discover Purpose"
            frontIcon={<ArrowUpRight size={17} />}
            topIcon={<ArrowUpRight size={17} />}
            styleVariant="primary"
            autoHover={true}
            autoHoverDelay={0}
            dataTestId="hero-mission-button"
          />
          <CubeButton
            href="#story"
            frontText="Read Her Story"
            topText="Her Living Legacy"
            frontIcon={<ArrowDownRight size={17} />}
            topIcon={<ArrowDownRight size={17} />}
            styleVariant="secondary"
            autoHover={true}
            autoHoverDelay={1500}
            dataTestId="hero-story-button"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
