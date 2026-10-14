import React, { useState, useEffect } from "react";
import Eyebrow from "../common/Eyebrow";
import { valuesList } from "../../constants/siteData";

export function ValuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Preload all 6 value images on mount for instantaneous hover response
  useEffect(() => {
    valuesList.forEach((val) => {
      if (val.image) {
        const img = new Image();
        img.src = val.image;
      }
    });
  }, []);

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
          data-aos-duration="900"
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
            The life of Dropati Jethani taught us that the way we treat people
            matters as much as what we achieve.
          </p>
        </div>

        {/* Values Cards Grid with Image Hover Reveal */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {valuesList.map((val, index) => {
            const isCardActive = hoveredIndex === index;

            return (
              <div
                key={val.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                data-aos-duration="800"
                data-testid={`value-${index + 1}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative cursor-pointer select-none"
              >
                {/* Inner Card Container */}
                <article
                  className={`relative bg-white border rounded-[16px] p-7 sm:p-8 flex flex-col justify-between overflow-hidden min-h-[225px] transition-all duration-500 ease-out ${
                    isCardActive
                      ? "border-gold/60 -translate-y-2 shadow-[0_24px_50px_rgba(25,16,12,0.28)] ring-1 ring-gold/40"
                      : "border-line shadow-sm hover:border-gold/60 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(25,16,12,0.28)] hover:ring-1 hover:ring-gold/40"
                  }`}
                >
                  {/* Top Animated Gold Line Indicator */}
                  <div
                    className={`absolute top-0 left-0 h-[3px] bg-gradient-to-r from-gold via-amber-300 to-gold transition-all duration-500 z-30 ${
                      isCardActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />

                  {/* Full Card Background Image revealed on Hover without any cut */}
                  <div
                    className={`absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-500 ease-out ${
                      isCardActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <img
                      src={val.image}
                      alt={val.alt || val.title}
                      className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out transform ${
                        isCardActive
                          ? "scale-105"
                          : "scale-100 group-hover:scale-105"
                      }`}
                      loading="lazy"
                    />
                    {/* Rich dark gradient scrim for crystal-clear text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/80 to-ink/65" />
                    {/* Warm amber/brand tint */}
                    <div className="absolute inset-0 bg-[#2d120a]/30 mix-blend-multiply" />
                  </div>

                  {/* Corner Badge with Arrow */}
                  <div
                    className={`absolute top-0 right-0 w-10 h-10 flex items-center justify-center rounded-bl-[28px] rounded-tr-[16px] z-20 pointer-events-none shadow-sm transition-all duration-300 ${
                      isCardActive
                        ? "bg-gradient-to-br from-gold to-amber-600 text-ink shadow-md"
                        : "bg-gradient-to-br from-terracotta to-terracotta-dark text-white group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-amber-600 group-hover:text-ink"
                    }`}
                  >
                    <span
                      className={`font-mono text-sm -mt-1 -mr-1 transition-transform duration-300 select-none font-bold ${
                        isCardActive
                          ? "translate-x-0.5 -translate-y-0.5"
                          : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      }`}
                    >
                      →
                    </span>
                  </div>

                  {/* Card Content with High-Contrast Typography Transitions */}
                  <div className="relative z-10 flex flex-col justify-between h-full pointer-events-none pr-8">
                    <div>
                      <span
                        className={`font-mono text-xs font-bold tracking-widest block mb-4 transition-colors duration-300 ${
                          isCardActive
                            ? "text-gold"
                            : "text-muted/60 group-hover:text-gold"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <h3
                        className={`font-serif text-2xl font-normal mb-3 transition-colors duration-300 tracking-tight ${
                          isCardActive
                            ? "text-white drop-shadow-sm"
                            : "text-ink group-hover:text-white group-hover:drop-shadow-sm"
                        }`}
                      >
                        {val.title}
                      </h3>
                      <p
                        className={`text-sm sm:text-[15px] leading-relaxed transition-colors duration-300 ${
                          isCardActive
                            ? "text-[#f5ebe1] drop-shadow-sm"
                            : "text-muted group-hover:text-[#f5ebe1] group-hover:drop-shadow-sm"
                        }`}
                      >
                        {val.text}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
