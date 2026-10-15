import React from "react";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Eyebrow, ScrollStack, ScrollStackItem } from "@/components/common";
import { programmesList } from "@/constants";

const programmeHighlights = {
  "01": ["Vocational Sewing & Crafts", "Financial Independence"],
  "02": ["Educational Guidance", "Scholarships & Access"],
  "03": ["Digital Skills & Tools", "Micro-Business Coaching"],
  "04": ["Compassionate Mentoring", "Confidence & Wellbeing"],
  "05": ["Family Resource Networks", "Community Solidarity"],
};

export function ProgrammesSection({ onOpenInterest }) {
  return (
    <section
      className="py-8 lg:py-14 bg-bone relative"
      id="programmes"
      data-testid="programmes-section"
    >
      {/* Section Header */}
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 mx-auto mb-14 sm:mb-20">
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          <Eyebrow text="Our programmes" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink tracking-tight mt-3 mb-4 sm:mb-5">
            TURNING COMPASSION
            <br />
            INTO <i className="text-gold italic font-serif">OPPORTUNITY</i>
          </h2>
          <div className="text-[15px] sm:text-[16px] text-muted leading-relaxed space-y-3 max-w-7xl">
            <p>
              Inspired by Dropati Jethani's life and values, we are developing initiatives
              that address the practical challenges women and girls face.
            </p>
            <p>
              From learning new skills to exploring employment, from educational guidance
              to community support, our aim is to help create opportunities that lead to
              meaningful, lasting change.
            </p>
            <p className="text-xs sm:text-sm text-muted/80">
              Explore the areas we intend to focus on as the foundation develops its
              programmes and partnerships.
            </p>
          </div>
        </div>
      </div>

      {/* Full-Section Stacking Card Deck */}
      <ScrollStack
        useWindowScroll={true}
        stackPosition="100px"
        itemDistance={130}
        itemStackDistance={24}
        itemScale={0.038}
        baseScale={0.86}
        dimAmount={0.2}
        tiltAmount={1.5}
        rotationAmount={0.8}
        holdDistance={220}
        smoothScroll={false}
      >
        {programmesList.map((prog) => {
          const highlights = programmeHighlights[prog.number] || [
            "Practical Empowerment",
            "Long-Term Growth",
          ];

          return (
            <ScrollStackItem
              key={prog.number}
              itemClassName="w-full h-[520px] sm:h-[460px] md:h-[420px] !bg-[#01236A] !border !border-[#FFD900]/30 hover:!border-[#FFD900] !rounded-3xl shadow-[0_24px_55px_-12px_rgba(1,35,106,0.65)] group transition-all duration-300 overflow-hidden select-none flex flex-col md:flex-row"
            >
              {/* Left Side: Photo with Badge & Gradient */}
              <div className="w-full md:w-[42%] lg:w-[40%] h-[200px] sm:h-[220px] md:h-full relative overflow-hidden flex-shrink-0 bg-[#001747] border-b md:border-b-0 md:border-r border-white/10">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01236A]/85 via-transparent to-transparent md:hidden" />
                <span className="absolute top-4 left-4 bg-[#001747]/95 backdrop-blur-md text-[#FFD900] font-mono text-xs sm:text-sm px-3.5 py-1 rounded-lg font-bold border border-[#FFD900]/30 shadow-lg">
                  {prog.number}
                </span>
                <div className="absolute bottom-4 left-4 right-4 hidden md:block">
                  <span className="inline-block bg-[#001747]/85 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 rounded-full border border-white/10">
                    Focus Area {prog.number} of 05
                  </span>
                </div>
              </div>

              {/* Right Side: Title, Description, Highlights & CTA */}
              <div className="flex-1 h-full p-6 sm:p-7 md:p-8 lg:p-9 flex flex-col justify-between text-white overflow-hidden">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={14} className="text-[#FFD900]" />
                    <span className="text-xs uppercase tracking-widest text-[#FFD900] font-bold font-mono">
                      Initiative {prog.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-white group-hover:text-[#FFD900] transition-colors font-normal tracking-tight mb-2.5 sm:mb-3 leading-snug">
                    {prog.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-blue-100/90 leading-relaxed font-sans line-clamp-2">
                    {prog.text}
                  </p>

                  {/* Highlights Badges */}
                  <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-wrap gap-2">
                    {highlights.map((h, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3 py-1 rounded-full text-xs text-white"
                      >
                        <CheckCircle2 size={13} className="text-[#FFD900]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Bar: Button & Tag */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={onOpenInterest}
                    className="inline-flex items-center gap-2.5 bg-[#FFD900] hover:bg-white text-[#01236A] font-bold px-6 py-2.5 sm:py-3 rounded-full text-xs uppercase tracking-wider shadow-lg hover:shadow-[#FFD900]/30 transition-all duration-300 cursor-pointer group-hover:gap-3"
                    data-testid={`programme-interest-${prog.number}`}
                  >
                    {prog.buttonLabel || `Explore ${prog.shortTitle}`}{" "}
                    <ArrowUpRight size={16} />
                  </button>
                  <span className="text-xs text-white/50 font-mono hidden sm:inline">
                    Dropati Devi Foundation
                  </span>
                </div>
              </div>
            </ScrollStackItem>
          );
        })}
      </ScrollStack>
    </section>
  );
}

export default ProgrammesSection;
