import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
  MousePointer,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Eyebrow from "../common/Eyebrow";
import { momentsList } from "../../constants/siteData";

// Spring transition matching the Framer configuration:
// { damping: 30, delay: 0, mass: 1, stiffness: 160, type: "spring" }
const springTransition = {
  type: "spring",
  stiffness: 160,
  damping: 30,
  mass: 1,
};

export function MomentsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextCard = () => {
    setActiveIndex((prev) => (prev + 1) % momentsList.length);
  };

  const handlePrevCard = () => {
    setActiveIndex(
      (prev) => (prev - 1 + momentsList.length) % momentsList.length,
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNextCard();
      if (e.key === "ArrowLeft") handlePrevCard();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      className="py-20 lg:py-32 bg-sand border-y border-line relative overflow-hidden"
      id="moments"
      data-testid="moments-section"
    >
      {/* Subtle background decorative ornament */}
      <div className="absolute top-12 right-10 text-gold/10 text-9xl font-serif pointer-events-none select-none">
        ❀
      </div>

      <div className="max-w-[1240px] w-full px-5 md:px-8 mx-auto relative z-10">
        {/* Section Header */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start mb-10 sm:mb-14"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div>
            <Eyebrow text="Cherished Moments" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink tracking-tight my-3">
              MOMENTS OF WARMTH,
              <br />
              LAUGHTER & <i className="text-gold italic font-serif">LOVE</i>
            </h2>
          </div>
          <div className="text-[15px] sm:text-[16px] text-muted leading-relaxed space-y-4">
            <p>
              Behind every value of resilience, courage and service was a real
              woman who brought laughter, warmth and unconditional love to
              everyone around her.
            </p>
            <p>
              These authentic photographs celebrate Dropati Devi in her element
              — rejoicing with family, sharing playful laughter with
              grandchildren, celebrating sweet milestones, and radiating quiet
              grace and wisdom.
            </p>
          </div>
        </div>

        {/* Accordion Controls Bar */}
        <div
          className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-line/60"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="flex items-center gap-2 text-xs text-muted font-medium"></div>

          <div className="flex items-center gap-2">
            {/* Dot Indicator Pills */}
            <div className="hidden sm:flex items-center gap-1.5 mr-2">
              {momentsList.map((m, idx) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? "w-7 bg-terracotta"
                      : "w-2 bg-line hover:bg-muted/60"
                  }`}
                  aria-label={`Go to slide ${m.number}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrow Controls */}
            <button
              type="button"
              onClick={handlePrevCard}
              className="p-2 rounded-full bg-white border border-line text-ink hover:text-terracotta hover:border-terracotta/40 shadow-sm transition-all duration-200 cursor-pointer"
              aria-label="Previous card"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={handleNextCard}
              className="p-2 rounded-full bg-white border border-line text-ink hover:text-terracotta hover:border-terracotta/40 shadow-sm transition-all duration-200 cursor-pointer"
              aria-label="Next card"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Expanding Cards Accordion Container */}
        {/* On desktop: horizontal flex row with expanding cards */}
        {/* On mobile: vertical flex column with expanding cards */}
        <div
          className="flex flex-col md:flex-row gap-3.5 md:gap-3 w-full md:h-[500px] lg:h-[540px] select-none"
          data-aos="fade-up"
          data-aos-duration="850"
        >
          {momentsList.map((moment, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.article
                key={moment.id}
                layout
                transition={springTransition}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`group relative overflow-hidden rounded-[22px] sm:rounded-[26px] cursor-pointer border transition-all duration-500 ${
                  isActive
                    ? "md:flex-[3.8] lg:flex-[4.2] h-[440px] md:h-full border-gold/70 shadow-[0_22px_45px_rgba(44,34,30,0.35)]"
                    : "md:flex-[0.7] lg:flex-[0.6] h-[72px] md:h-full border-line/80 hover:border-gold/40 shadow-sm hover:shadow-md bg-[#241712]"
                }`}
                data-testid={`moment-card-${moment.id}`}
              >
                {/* Background Image with Pan / Zoom */}
                <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#241712]">
                  <img
                    src={moment.image}
                    alt={moment.alt}
                    className={`w-full h-full object-cover ${moment.objectPosition} transition-all duration-700 ease-out ${
                      isActive
                        ? "scale-105 brightness-100"
                        : "scale-100 opacity-60 group-hover:opacity-85 brightness-[0.7] group-hover:brightness-[0.85]"
                    }`}
                    loading="lazy"
                  />

                  {/* Dynamic Gradient Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                      isActive
                        ? "bg-gradient-to-t from-ink/95 via-ink/40 to-black/25 opacity-90"
                        : "bg-gradient-to-t from-ink/90 via-ink/70 to-ink/60 opacity-80 group-hover:opacity-60"
                    }`}
                  />
                </div>

                {/* ACTIVE CARD CONTENT */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="relative z-10 w-full h-full p-5 sm:p-7 flex flex-col justify-between"
                    >
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 bg-black/55 backdrop-blur-md text-bone font-mono text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full font-medium border border-white/15 shadow-sm">
                            <Sparkles size={12} className="text-gold" />
                            {moment.number} • {moment.tag}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Story & Information */}
                      <div className="max-w-2xl pt-4">
                        <div className="flex items-center gap-2 text-xs text-gold/90 font-mono font-medium mb-1.5 uppercase tracking-wider">
                          <span>{moment.categoryLabel}</span>
                          <span className="inline-block w-1 h-1 rounded-full bg-gold/60" />
                          <Heart size={12} className="fill-gold/40 text-gold" />
                        </div>

                        <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-white font-normal leading-tight mb-2 drop-shadow-md">
                          {moment.title}
                        </h3>

                        <p className="font-serif italic text-sm sm:text-base text-[#f7ecd9] mb-2.5 drop-shadow-sm line-clamp-2">
                          "{moment.quote}"
                        </p>

                        <p className="text-xs sm:text-[13.5px] text-bone/90 leading-relaxed line-clamp-2 sm:line-clamp-3 font-sans">
                          {moment.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* INACTIVE CARD CONTENT (DESKTOP) */}
                <div
                  className={`hidden md:flex absolute inset-0 z-10 flex-col justify-between items-center py-6 px-2 transition-opacity duration-300 ${
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  {/* Top: Card Number */}
                  <span className="font-mono text-sm font-bold text-white/80 group-hover:text-gold transition-colors">
                    {moment.number}
                  </span>

                  {/* Middle: Rotated Vertical Title */}
                  <div className="flex-1 flex items-center justify-center my-4 overflow-hidden">
                    <span
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                      className="font-sans text-[11px] lg:text-xs tracking-[0.2em] uppercase font-semibold text-white/75 group-hover:text-white transition-colors whitespace-nowrap line-clamp-1"
                    >
                      {moment.title}
                    </span>
                  </div>

                  {/* Bottom: Heart Indicator */}
                  <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gold/80 group-hover:text-gold group-hover:scale-110 transition-all">
                    <Heart size={13} className="fill-gold/30" />
                  </div>
                </div>

                {/* INACTIVE CARD CONTENT (MOBILE) */}
                <div
                  className={`md:hidden absolute inset-0 z-10 flex items-center justify-between px-5 py-3 transition-opacity duration-300 ${
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-gold px-2 py-0.5 bg-black/40 rounded-full border border-white/10">
                      {moment.number}
                    </span>
                    <span className="font-serif text-base text-white font-medium line-clamp-1">
                      {moment.title}
                    </span>
                  </div>

                  <span className="text-xs text-white/70 font-mono flex items-center gap-1">
                    <span>Explore</span>
                    <ChevronRight size={14} />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div
          className="mt-14 sm:mt-18 p-7 sm:p-9 bg-white/70 backdrop-blur-sm border border-line rounded-lg text-center flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span className="text-gold text-2xl mb-2 font-serif">❦</span>
          <p className="font-serif text-lg sm:text-xl text-ink font-normal italic max-w-2xl mx-auto leading-relaxed">
            "Her journey reminds us that true strength is woven with kindness,
            laughter, and the quiet devotion to lifting others up."
          </p>
          <span className="font-sans text-xs uppercase tracking-widest text-muted/80 mt-3 font-semibold">
            Dropati Jethani (1945) • A Legacy of Compassion
          </span>
        </div>
      </div>
    </section>
  );
}

export default MomentsSection;
