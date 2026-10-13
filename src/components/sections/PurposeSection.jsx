import React from "react";
import { Heart, Leaf, Quote, Sparkles } from "lucide-react";
import Eyebrow from "../common/Eyebrow";
import { purposePillars } from "../../constants/siteData";

export function PurposeSection() {
  const getIcon = (type) => {
    const iconClass = "w-6 h-6 text-terracotta group-hover:text-gold group-hover:scale-110 transition-all duration-300";
    switch (type) {
      case "leaf":
        return <Leaf className={iconClass} />;
      case "sparkles":
        return <Sparkles className={iconClass} />;
      case "heart":
        return <Heart className={iconClass} />;
      default:
        return <Quote className={iconClass} />;
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-sand border-y border-line" id="purpose" data-testid="purpose-section">
      <div className="max-w-[1180px] w-full px-5 md:px-8 mx-auto">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start mb-16 sm:mb-20"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div>
            <Eyebrow text="Our purpose" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink tracking-tight my-3">
              EVERY WOMAN DESERVES
              <br />
              AN <i className="text-gold italic font-serif">OPPORTUNITY</i>
            </h2>
          </div>
          <div className="text-[15px] sm:text-[16px] text-muted leading-relaxed space-y-4">
            <p>
              We believe that a woman's circumstances should never define the limits
              of her future.
            </p>
            <p>
              Through our proposed initiatives, we aim to help women and girls access
              learning opportunities, develop practical skills, explore livelihoods
              and find the support they need to move forward.
            </p>
            <p>
              Our goal is simple: to help create a future where women can make
              informed choices, build confidence and shape their own lives.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-line">
          {purposePillars.map((pillar, index) => (
            <article
              className="group relative p-8 sm:p-9 border-b border-line sm:border-r last:border-b-0 sm:last:border-r-0 lg:[&:nth-child(4n)]:border-r-0 flex flex-col justify-between transition-all duration-500 overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer"
              key={pillar.title}
              data-aos="fade-up"
              data-aos-delay={index * 140}
              data-aos-duration="850"
              data-testid={`purpose-card-${pillar.title.toLowerCase()}`}
            >
              {/* Top-to-bottom gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#9a3b26] via-[#7d2c1b] to-[#5e1f13] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <span className="font-mono text-xs text-muted/60 group-hover:text-gold mb-6 block font-semibold transition-colors duration-300">
                  {pillar.number}
                </span>
                <div className="mb-5">{getIcon(pillar.iconType)}</div>
                <h3 className="font-serif text-xl sm:text-2xl text-ink group-hover:text-white font-normal mb-3 transition-colors duration-300">
                  {pillar.title}
                </h3>
              </div>
              <p className="relative z-10 text-sm text-muted group-hover:text-[#f5ebe1] leading-relaxed transition-colors duration-300">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PurposeSection;
