import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/common";

export function ClosingSection({ onOpenInterest }) {
  return (
    <section
      className="py-24 sm:py-36 bg-[#01236A] text-white text-center relative overflow-hidden border-t border-[#FFD900]/25"
      id="closing"
      data-testid="closing-section"
    >
      {/* 1. Subtle warm ambient radial lighting effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 45%, rgba(255, 217, 0, 0.18) 0%, rgba(1, 35, 106, 0.6) 50%, rgba(0, 23, 71, 0) 80%)",
        }}
      />

      {/* 2. Top & Bottom delicate golden accent lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD900]/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-[1px] bg-gradient-to-r from-transparent via-[#FFD900]/40 to-transparent pointer-events-none" />

      {/* 3. Subtle architectural concentric rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] rounded-full border border-[#FFD900]/[0.15] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] sm:w-[780px] sm:h-[780px] rounded-full border border-[#FFD900]/[0.08] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[800px] w-full px-5 md:px-8 mx-auto flex flex-col items-center justify-center">
        {/* Soft glowing emblem */}
        <div
          className="relative inline-block mb-6 select-none"
          data-aos="fade-down"
          data-aos-duration="700"
        >
          <span className="absolute inset-0 text-[#FFD900] text-4xl blur-sm opacity-50">
            ✳
          </span>
          <span className="relative text-[#FFD900] text-4xl block opacity-90">✳</span>
        </div>

        <div data-aos="zoom-in" data-aos-duration="900">
          <Eyebrow text="A legacy of strength" light={true} className="justify-center" />
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight my-6">
            ONE WOMAN'S STRENGTH
            <br />
            CAN INSPIRE <i className="text-[#FFD900] italic font-serif">GENERATIONS.</i>
          </h2>
          <div className="text-[15px] sm:text-[17px] text-white/95 leading-relaxed space-y-4 max-w-2xl mx-auto mb-10">
            <p>
              Dropati Jethani spent her life caring for others, overcoming hardship and
              helping her family move forward. Her story inspires the work we hope to do
              for women and girls who deserve the same chance to build a brighter future.
            </p>
            <p>
              Her journey does not end with her story. It continues through every
              opportunity we help create.
            </p>
          </div>
          <button
            className="group inline-flex items-center justify-center gap-3 bg-[#FFD900] text-[#01236A] hover:bg-white hover:text-[#01236A] font-sans font-bold text-[11px] uppercase tracking-wider px-8 py-4 rounded-sm shadow-xl hover:shadow-2xl hover:shadow-[#FFD900]/30 transition-all duration-300 hover:-translate-y-1 mx-auto cursor-pointer"
            onClick={onOpenInterest}
            data-testid="closing-legacy-button"
          >
            <span>Be Part of Her Legacy</span>
            <ArrowUpRight
              size={17}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ClosingSection;
