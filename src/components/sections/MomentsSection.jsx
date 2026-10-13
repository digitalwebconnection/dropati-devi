import React, { useState, useEffect, useCallback } from "react";
import { ArrowUpRight, Maximize2, X, ChevronLeft, ChevronRight, Heart, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Eyebrow from "../common/Eyebrow";
import { momentsList } from "../../constants/siteData";

export function MomentsSection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % momentsList.length);
    }
  }, [lightboxIndex]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + momentsList.length) % momentsList.length);
    }
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, showNext, showPrev]);

  const currentMoment = lightboxIndex !== null ? momentsList[lightboxIndex] : null;

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

      <div className="max-w-[1180px] w-full px-5 md:px-8 mx-auto relative z-10">
        {/* Section Header */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start mb-14 sm:mb-16"
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
              woman who brought laughter, warmth and unconditional love to everyone
              around her.
            </p>
            <p>
              These authentic photographs celebrate Dropati Devi in her element —
              rejoicing with family, sharing playful laughter with grandchildren,
              celebrating sweet milestones, and radiating quiet grace and wisdom.
            </p>
          </div>
        </div>

        {/* Moments Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {momentsList.map((moment, index) => (
            <article
              key={moment.id}
              onClick={() => openLightbox(index)}
              data-aos="fade-up"
              data-aos-delay={index * 110}
              data-aos-duration="850"
              className="group relative bg-white border border-line rounded-lg overflow-hidden flex flex-col shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer"
              data-testid={`moment-card-${moment.id}`}
            >
              {/* Image Container */}
              <div className="relative h-[280px] sm:h-[320px] w-full overflow-hidden bg-[#241712]">
                <img
                  src={moment.image}
                  alt={moment.alt}
                  className={`w-full h-full object-cover ${moment.objectPosition} group-hover:scale-106 transition-transform duration-700 ease-out`}
                  loading="lazy"
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

                {/* Tag Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-ink/75 backdrop-blur-md text-bone font-mono text-[11px] px-3 py-1 rounded-full font-medium border border-white/10 shadow-sm">
                    <Sparkles size={12} className="text-gold" />
                    {moment.tag}
                  </span>
                </div>

                {/* Zoom/Expand Icon Badge */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-ink flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Maximize2 size={16} />
                  </span>
                </div>

                {/* Hover Quote Preview */}
                <div className="absolute bottom-4 left-4 right-4 z-10 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  <p className="font-serif italic text-sm text-[#f6eee4] line-clamp-2 drop-shadow-md">
                    "{moment.quote}"
                  </p>
                </div>
              </div>

              {/* Card Information */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-muted/70 font-mono font-medium mb-2.5">
                    <span className="uppercase tracking-wider">{moment.number} • {moment.categoryLabel}</span>
                    <span className="flex items-center gap-1 text-gold">
                      <Heart size={13} className="fill-gold/40" />
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-ink group-hover:text-terracotta font-normal transition-colors duration-300 mb-2">
                    {moment.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-3">
                    {moment.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-line/60 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-terracotta group-hover:text-terracotta-dark">
                  <span>View photo & story</span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div
          className="mt-16 sm:mt-20 p-7 sm:p-9 bg-white/70 backdrop-blur-sm border border-line rounded-lg text-center flex flex-col items-center justify-center"
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

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && currentMoment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md p-4 sm:p-7 select-none"
            role="dialog"
            aria-modal="true"
            aria-label={currentMoment.title}
            data-testid="moment-lightbox"
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between text-white z-20 pb-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-gold px-2.5 py-1 bg-white/10 rounded-full">
                  {currentMoment.number} / 06
                </span>
                <span className="hidden sm:inline-block text-xs uppercase tracking-wider text-[#eeddd0]/80 font-sans">
                  {currentMoment.categoryLabel}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={closeLightbox}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:rotate-90 cursor-pointer"
                  aria-label="Close photo view"
                  data-testid="close-lightbox-button"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Lightbox Center Content with Nav Arrows */}
            <div className="relative flex-1 flex items-center justify-center my-auto min-h-0 py-2">
              {/* Previous Button */}
              <button
                onClick={showPrev}
                className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/60 hover:bg-white/20 text-white backdrop-blur-md transition-all duration-200 hover:scale-110 cursor-pointer border border-white/10"
                aria-label="Previous image"
                data-testid="prev-moment-button"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main Image View */}
              <div className="relative max-h-[68vh] sm:max-h-[72vh] max-w-4xl flex items-center justify-center p-2">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentMoment.id}
                    src={currentMoment.image}
                    alt={currentMoment.alt}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="max-h-[64vh] sm:max-h-[70vh] w-auto max-w-full object-contain rounded-md shadow-2xl border border-white/15"
                  />
                </AnimatePresence>
              </div>

              {/* Next Button */}
              <button
                onClick={showNext}
                className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/60 hover:bg-white/20 text-white backdrop-blur-md transition-all duration-200 hover:scale-110 cursor-pointer border border-white/10"
                aria-label="Next image"
                data-testid="next-moment-button"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Lightbox Footer & Information */}
            <div className="z-20 max-w-3xl mx-auto w-full text-center text-white pt-2">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-1.5">
                {currentMoment.title}
              </h3>
              <p className="font-serif italic text-gold text-sm sm:text-base mb-2">
                "{currentMoment.quote}"
              </p>
              <p className="text-xs sm:text-sm text-[#eeddd0] leading-relaxed max-w-2xl mx-auto mb-4 hidden sm:block">
                {currentMoment.description}
              </p>

              {/* Thumbnail Strip */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-1">
                {momentsList.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => setLightboxIndex(idx)}
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded overflow-hidden transition-all duration-300 cursor-pointer border-2 flex-shrink-0 ${
                      idx === lightboxIndex
                        ? "border-gold scale-110 shadow-lg shadow-gold/30"
                        : "border-white/20 opacity-50 hover:opacity-100"
                    }`}
                    aria-label={`View photo ${m.number}: ${m.title}`}
                  >
                    <img
                      src={m.image}
                      alt={m.title}
                      className={`w-full h-full object-cover ${m.objectPosition}`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default MomentsSection;
