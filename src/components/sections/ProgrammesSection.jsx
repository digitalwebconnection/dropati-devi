import React from "react";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "../common/Eyebrow";
import { programmesList } from "../../constants/siteData";

export function ProgrammesSection({ onOpenInterest }) {
  return (
    <section className="py-20 lg:py-32 bg-bone" id="programmes" data-testid="programmes-section">
      <div className="max-w-[1180px] w-full px-5 md:px-8 mx-auto">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start mb-16 sm:mb-20"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div>
            <Eyebrow text="Our programmes" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink tracking-tight my-3">
              TURNING COMPASSION
              <br />
              INTO <i className="text-gold italic font-serif">OPPORTUNITY</i>
            </h2>
          </div>
          <div className="text-[15px] sm:text-[16px] text-muted leading-relaxed space-y-4">
            <p>
              Inspired by Dropati Jethani's life and values, we are developing
              initiatives that address the practical challenges women and girls
              face.
            </p>
            <p>
              From learning new skills to exploring employment, from educational
              guidance to community support, our aim is to help create opportunities
              that lead to meaningful, lasting change.
            </p>
            <p>
              Explore the areas we intend to focus on as the foundation develops its
              programmes and partnerships.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmesList.map((prog, index) => (
            <article
              className="group bg-white border border-line rounded overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              key={prog.title}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              data-aos-duration="850"
              data-testid={`programme-card-${prog.number}`}
            >
              <div className="relative h-[220px] sm:h-[240px] w-full overflow-hidden bg-sand">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 right-4 bg-ink/75 backdrop-blur-sm text-bone font-mono text-xs px-2.5 py-1 rounded font-semibold">
                  {prog.number}
                </span>
              </div>
              <div className="p-7 flex flex-col flex-1 justify-between gap-5">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal mb-3">{prog.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{prog.text}</p>
                </div>
                <button
                  className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark font-sans font-semibold text-xs uppercase tracking-wider transition-all duration-300 group-hover:gap-3 cursor-pointer self-start"
                  onClick={onOpenInterest}
                  data-testid={`programme-interest-${prog.number}`}
                >
                  {prog.buttonLabel || `Explore ${prog.shortTitle}`} <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgrammesSection;
