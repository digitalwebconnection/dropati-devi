import React from "react";
import Eyebrow from "../common/Eyebrow";
import { valuesList } from "../../constants/siteData";

export function ValuesSection() {
  return (
    <section className="py-20 lg:py-32 bg-sand border-b border-line" id="values" data-testid="values-section">
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

        {/* Clean, elegant standalone cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {valuesList.map((val, index) => (
            <article
              key={val.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              data-testid={`value-${index + 1}`}
              className="group relative bg-white border border-line rounded-lg p-8 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Subtle top indicator accent bar on hover */}
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-terracotta group-hover:w-full transition-all duration-500 ease-out" />

              <div>
                <span className="font-mono text-xs text-muted/60 group-hover:text-terracotta font-semibold tracking-widest block mb-5 transition-colors duration-300">
                  0{index + 1}
                </span>
                <h3 className="font-serif text-2xl text-ink group-hover:text-terracotta font-normal mb-3 transition-colors duration-300">
                  {val.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-muted leading-relaxed">
                  {val.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
