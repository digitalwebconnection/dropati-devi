import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/common";
import { involvedOptions } from "@/constants";

export function InvolvedSection({ onOpenInterest }) {
  return (
    <section className="py-20 lg:py-32 bg-[#eaf1fc]" data-testid="involved-section">
      <div className="max-w-[1180px] w-full px-5 md:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div
          className="flex flex-col space-y-4"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <Eyebrow text="Get involved" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#01236A] tracking-tight my-3">
            BE PART OF
            <br />
            <i className="text-[#FFD900] italic font-serif">HER LEGACY</i>
          </h2>
          <div className="text-[15px] sm:text-[16px] text-muted leading-relaxed space-y-4">
            <p>Change begins when people come together with a shared purpose.</p>
            <p>
              Whether you have time to volunteer, skills to share, an organisation
              interested in partnering or simply a desire to spread her story, there is a
              place for you in this journey.
            </p>
            <p>
              Together, we can work towards a future where more women and girls have the
              opportunity to build a life filled with confidence, dignity and possibility.
            </p>
          </div>
        </div>

        <div className="flex flex-col border-t border-[#01236A]/20">
          {involvedOptions.map((opt, index) => (
            <button
              key={opt.number}
              onClick={onOpenInterest}
              data-aos="fade-left"
              data-aos-delay={index * 130}
              data-aos-duration="850"
              data-testid={opt.testId}
              className="group flex items-center justify-between w-full py-6 sm:py-7 border-b border-[#01236A]/20 text-left font-serif text-xl sm:text-2xl text-[#01236A] hover:text-[#01236A] transition-colors duration-300 cursor-pointer"
            >
              <span className="font-mono text-xs text-[#01236A]/60 font-sans group-hover:text-[#01236A] font-bold transition-colors">
                {opt.number}
              </span>
              <span className="flex-1 px-4">{opt.title}</span>
              <ArrowUpRight className="text-[#01236A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 w-5 h-5" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InvolvedSection;
