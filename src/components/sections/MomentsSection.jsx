import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Eyebrow } from "@/components/common";
import { momentsList } from "@/constants";
import { useKeydown } from "@/hooks";

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
    setActiveIndex((prev) => (prev - 1 + momentsList.length) % momentsList.length);
  };

  useKeydown(["ArrowRight", "ArrowLeft"], (e) => {
    if (e.key === "ArrowRight") handleNextCard();
    if (e.key === "ArrowLeft") handlePrevCard();
  });

  return (
    <section
      className="pt-20 lg:pt-32 pb-0 bg-sand border-y border-line relative overflow-hidden"
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
              Behind every value of resilience, courage and service was a real woman who
              brought laughter, warmth and unconditional love to everyone around her.
            </p>
            <p>
              These authentic photographs celebrate Dropati Devi in her element —
              rejoicing with family, sharing playful laughter with grandchildren,
              celebrating sweet milestones, and radiating quiet grace and wisdom.
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
                      ? "w-7 bg-[#FFD900]"
                      : "w-2 bg-[#01236A]/20 hover:bg-[#01236A]/50"
                  }`}
                  aria-label={`Go to slide ${m.number}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrow Controls */}
            <button
              type="button"
              onClick={handlePrevCard}
              className="p-2 rounded-full bg-white border border-[#01236A]/20 text-[#01236A] hover:bg-[#FFD900] hover:text-[#01236A] hover:border-[#FFD900] shadow-sm transition-all duration-200 cursor-pointer"
              aria-label="Previous card"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={handleNextCard}
              className="p-2 rounded-full bg-white border border-[#01236A]/20 text-[#01236A] hover:bg-[#FFD900] hover:text-[#01236A] hover:border-[#FFD900] shadow-sm transition-all duration-200 cursor-pointer"
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
                    ? "md:flex-[3.8] lg:flex-[4.2] h-[440px] md:h-full border-[#FFD900] shadow-[0_22px_45px_rgba(1,35,106,0.35)]"
                    : "md:flex-[0.7] lg:flex-[0.6] h-[72px] md:h-full border-[#01236A]/20 hover:border-[#FFD900] shadow-sm hover:shadow-md bg-[#001747]"
                }`}
                data-testid={`moment-card-${moment.id}`}
              >
                {/* Background Image with Pan / Zoom */}
                <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#001747]">
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
                        ? "bg-gradient-to-t from-[#01236A]/95 via-[#01236A]/45 to-transparent opacity-90"
                        : "bg-gradient-to-t from-[#01236A]/90 via-[#01236A]/70 to-[#01236A]/60 opacity-80 group-hover:opacity-60"
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
                          <span className="inline-flex items-center gap-1.5 bg-[#001747]/85 backdrop-blur-md text-white font-mono text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full font-medium border border-[#FFD900]/30 shadow-sm">
                            <Sparkles size={12} className="text-[#FFD900]" />
                            {moment.number} • {moment.tag}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Story & Information */}
                      <div className="max-w-2xl pt-4">
                        <div className="flex items-center gap-2 text-xs text-[#FFD900] font-mono font-bold mb-1.5 uppercase tracking-wider">
                          <span>{moment.categoryLabel}</span>
                          <span className="inline-block w-1 h-1 rounded-full bg-[#FFD900]/60" />
                          <Heart size={12} className="fill-[#FFD900]/40 text-[#FFD900]" />
                        </div>

                        <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-white font-normal leading-tight mb-2 drop-shadow-md">
                          {moment.title}
                        </h3>

                        <p className="font-serif italic text-sm sm:text-base text-white/95 mb-2.5 drop-shadow-sm line-clamp-2">
                          "{moment.quote}"
                        </p>

                        <p className="text-xs sm:text-[13.5px] text-white/85 leading-relaxed line-clamp-2 sm:line-clamp-3 font-sans">
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
                  <span className="font-mono text-sm font-bold text-white/80 group-hover:text-[#FFD900] transition-colors">
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
                  <div className="w-8 h-8 rounded-full bg-[#001747]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[#FFD900] group-hover:text-[#FFD900] group-hover:scale-110 transition-all">
                    <Heart size={13} className="fill-[#FFD900]/30" />
                  </div>
                </div>

                {/* INACTIVE CARD CONTENT (MOBILE) */}
                <div
                  className={`md:hidden absolute inset-0 z-10 flex items-center justify-between px-5 py-3 transition-opacity duration-300 ${
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#FFD900] px-2 py-0.5 bg-[#001747]/80 rounded-full border border-[#FFD900]/30">
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
      </div>

      {/* Full-Width Quote Banner Section */}
      <div
        className="w-full mt-16 sm:mt-24 relative overflow-hidden bg-gradient-to-br from-[#01236A] via-[#001b54] to-[#001133] py-16 sm:py-12 px-5 md:px-8 text-center text-white border-t border-[#FFD900]/30 shadow-2xl"
        data-aos="fade-up"
        data-aos-duration="850"
      >
        {/* Subtle Ambient Radial Lighting */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255, 217, 0, 0.12) 0%, rgba(1, 35, 106, 0.4) 50%, transparent 80%)",
          }}
        />

        {/* Delicate golden accent line on top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-[2px] bg-gradient-to-r from-transparent via-[#FFD900]/80 to-transparent pointer-events-none" />

        {/* Background decorative quote watermark */}
        <div className="absolute -top-6 left-6 md:left-16 text-[#FFD900]/[0.06] text-9xl sm:text-[160px] font-serif pointer-events-none select-none leading-none">
          “
        </div>
        <div className="absolute -bottom-16 right-6 md:right-16 text-[#FFD900]/[0.06] text-9xl sm:text-[160px] font-serif pointer-events-none select-none leading-none">
          ”
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto">
          {/* Stylized Quote Text */}
          <blockquote className="relative my-2 max-w-4xl">
            <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-white/95 font-normal leading-relaxed sm:leading-[1.4] tracking-wide">
              “Her journey reminds us that{" "}
              <span className="text-[#FFD900] italic font-serif font-medium">
                true strength
              </span>{" "}
              is woven with{" "}
              <span className="text-white font-medium underline decoration-[#FFD900]/40 underline-offset-4">
                kindness
              </span>
              ,{" "}
              <span className="text-[#FFD900] italic font-serif font-medium">
                laughter
              </span>
              , and the quiet devotion to{" "}
              <span className="text-[#FFD900] font-medium">lifting others up</span>
              .”
            </p>
          </blockquote>

          {/* Author Attribution Divider */}
          <div className="pt-6 border-t border-white/15 w-full max-w-md mx-auto flex items-center justify-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#FFD900]/40" />
            <div className="flex flex-col items-center">
              <span className="font-serif text-sm sm:text-base font-semibold text-white tracking-wide">
                Dropati Jethani (1945)
              </span>
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#FFD900]/90 font-medium mt-0.5">
                A Legacy of Compassion
              </span>
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#FFD900]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MomentsSection;
