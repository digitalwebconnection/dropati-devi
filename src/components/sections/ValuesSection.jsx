import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/common";
import { valuesList } from "@/constants";
import { useReducedMotion } from "@/hooks";

export function ValuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [autoIndex, setAutoIndex] = useState(null);
  const [isGridHovered, setIsGridHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Preload all 6 value images on mount for instantaneous hover response
  useEffect(() => {
    valuesList.forEach((val) => {
      if (val.image) {
        const img = new Image();
        img.src = val.image;
      }
    });
  }, []);

  // Auto-hover / flip a card every 8 seconds (flips to content for 5s, then flips back)
  useEffect(() => {
    if (prefersReducedMotion) return;

    let revertTimer;
    let nextIdx = 0;

    const interval = setInterval(() => {
      // Don't auto-hover if user is manually interacting with cards
      if (isGridHovered || hoveredIndex !== null || flippedIndex !== null) {
        return;
      }

      setAutoIndex(nextIdx);

      // Revert card back to image after 5 seconds of viewing
      revertTimer = setTimeout(() => {
        setAutoIndex(null);
      }, 5000);

      nextIdx = (nextIdx + 1) % valuesList.length;
    }, 8000);

    return () => {
      clearInterval(interval);
      if (revertTimer) clearTimeout(revertTimer);
    };
  }, [isGridHovered, hoveredIndex, flippedIndex, prefersReducedMotion]);

  return (
    <section
      className="py-20 lg:py-32 bg-sand border-b border-line"
      id="values"
      data-testid="values-section"
    >
      <div className="max-w-[1180px] w-full px-5 md:px-8 mx-auto">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start mb-16 sm:mb-20"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div>
            <Eyebrow text="Our values" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink tracking-tight my-3">
              ROOTED IN VALUES.
              <br />
              GUIDED BY <i className="text-gold italic font-serif">PURPOSE.</i>
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
            The life of Dropati Jethani taught us that the way we treat people matters as
            much as what we achieve.
          </p>
        </div>

        {/* 3D Flip Values Cards Grid with 8s Auto-Hover Cycle */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          onMouseEnter={() => {
            setIsGridHovered(true);
            setAutoIndex(null);
          }}
          onMouseLeave={() => {
            setIsGridHovered(false);
            setHoveredIndex(null);
          }}
        >
          {valuesList.map((val, index) => {
            const isFlipped =
              hoveredIndex === index || flippedIndex === index || autoIndex === index;

            return (
              <div
                key={val.title}
                data-aos="fade-up"
                data-aos-delay={Math.min((index % 3) * 60, 120)}
                data-aos-duration="650"
                data-testid={`value-${index + 1}`}
                role="button"
                tabIndex={0}
                aria-expanded={isFlipped}
                onMouseEnter={() => {
                  setAutoIndex(null);
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setFlippedIndex((prev) => (prev === index ? null : index))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setFlippedIndex((prev) => (prev === index ? null : index));
                  }
                }}
                className="group relative cursor-pointer select-none h-[320px] sm:h-[340px] w-full"
                style={{
                  perspective: "1000px",
                  WebkitPerspective: "1000px",
                }}
              >
                {/* 3D Flipper Container */}
                <div
                  className="relative w-full h-full rounded-[20px] shadow-md group-hover:shadow-2xl transition-all duration-700"
                  style={{
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    transformStyle: "preserve-3d",
                    WebkitTransformStyle: "preserve-3d",
                    transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* FRONT FACE: Photo First */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-[20px] overflow-hidden border border-line/70 bg-black flex flex-col justify-between p-6 sm:p-7 text-white"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(0deg)",
                    }}
                  >
                    {/* Full Cover Image */}
                    <img
                      src={val.image}
                      alt={val.alt || val.title}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlays for High-Contrast Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30 pointer-events-none" />
                    <div className="absolute inset-0 bg-[#01236A]/20 mix-blend-multiply pointer-events-none" />

                    {/* Top Row: Number Badge & Flip Hint */}
                    <div className="relative z-10 flex items-center justify-between w-full">
                      <span className="font-mono text-xs font-bold text-[#FFD900] bg-black/55 backdrop-blur-md px-3 py-1 rounded-full border border-[#FFD900]/30 shadow-sm">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Bottom Row: Value Title and Callout */}
                    <div className="relative z-10">
                      <span className="text-[11px] font-sans uppercase tracking-widest text-[#FFD900] font-semibold block mb-1">
                        Core Value
                      </span>
                      <h3 className="font-serif text-2xl sm:text-[26px] text-white font-normal tracking-tight mb-2 drop-shadow-md">
                        {val.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-white/90 font-sans font-medium tracking-wide">
                        <span className="underline decoration-[#FFD900]/70 underline-offset-4">
                          Hover to explore
                        </span>
                        <ArrowRight size={13} className="text-[#FFD900]" />
                      </div>
                    </div>
                  </div>

                  {/* BACK FACE: Content Revealed on Flip */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-[20px] overflow-hidden p-7 sm:p-8 flex flex-col justify-between text-white border-2 border-[#FFD900]/50 shadow-2xl bg-gradient-to-br from-[#01236A] via-[#001747] to-[#001133]"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    {/* Subtle Radial Amber Lighting */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle at 85% 15%, rgba(255, 217, 0, 0.16) 0%, transparent 60%)",
                      }}
                    />

                    {/* Top Golden Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#FFD900] to-transparent pointer-events-none" />

                    {/* Decorative Watermark Number */}
                    <div className="absolute -bottom-6 -right-3 text-white/[0.05] text-8xl font-serif font-bold pointer-events-none select-none">
                      0{index + 1}
                    </div>

                    {/* Top Row on Back */}
                    <div className="relative z-10 flex items-center justify-between w-full">
                      <span className="font-mono text-xs font-bold tracking-widest text-[#FFD900] bg-[#FFD900]/15 px-3 py-1 rounded-full border border-[#FFD900]/30">
                        0{index + 1}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-widest text-[#FFD900] font-semibold">
                        <Sparkles size={13} />
                        <span>Principle</span>
                      </span>
                    </div>

                    {/* Center Body: Title & Content */}
                    <div className="relative z-10 my-auto py-2">
                      <h3 className="font-serif text-2xl sm:text-[28px] text-[#FFD900] font-normal tracking-tight mb-3">
                        {val.title}
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-white/95 leading-relaxed font-sans font-normal">
                        {val.text}
                      </p>
                    </div>

                    {/* Bottom Row on Back */}
                    <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/70 font-sans">
                      <span className="tracking-wide">Dropati Devi Heritage</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
