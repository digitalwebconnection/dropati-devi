import React from "react";
import { ArrowUpRight, HeartHandshake } from "lucide-react";
import { Eyebrow, ScrollExpand } from "@/components/common";
import { siteImages } from "@/constants";

export function HelpSection({ onOpenInterest }) {
  const helpImage =
    siteImages.wellbeing ||
    "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1920&q=85";

  // Initial Top Centered Header before scroll expansion
  const initialHeader = (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4">
      <Eyebrow text="Get help" />
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink tracking-tight mt-2.5 sm:mt-3 mb-1 sm:mb-2">
        YOUR NEXT STEP
        <br />
        <i className="text-gold italic font-serif">STARTS HERE</i>
      </h2>
    </div>
  );

  return (
    <section className="relative w-full bg-bone" id="help" data-testid="help-section">
      <ScrollExpand
        src={helpImage}
        alt="Dropati Devi Foundation - Get Help"
        header={initialHeader}
        scrollHint="Scroll to expand"
        useWindowScroll={true}
        mediaZoom={1.16}
        overlayScrim={0.84}
        startRadius={24}
        endRadius={28}
        scrollDistance={1.15}
        holdDistance={0.85}
        smoothing={0.1}
        stageClassName="bg-bone"
      >
        {/* Decreased-height framed card content */}
        <div className="w-full h-full flex items-center justify-center p-6 sm:p-10 lg:p-12 pointer-events-auto">
          <div className="max-w-[1140px] w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Left Column (5 cols): Eyebrow, Heading, Dignity Quote Card */}
            <div className="lg:col-span-5 text-white flex flex-col justify-center space-y-4">
              <div>
                <Eyebrow text="Get help" className="text-[#FFD900] text-xs" />
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight mt-2 mb-0 leading-[1.15]">
                  YOUR NEXT STEP
                  <br />
                  <i className="text-[#FFD900] italic font-serif">STARTS HERE</i>
                </h2>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-xl max-w-md">
                <div className="flex items-center gap-2 text-[#FFD900] mb-1.5 font-medium text-xs tracking-wider uppercase">
                  <HeartHandshake size={16} />
                  <span>Our Promise</span>
                </div>
                <p className="font-serif text-base sm:text-lg text-white font-normal italic leading-relaxed">
                  "Everyone deserves to be heard with dignity and respect."
                </p>
              </div>
            </div>

            {/* Right Column (7 cols): Guidance text, CTA Button, Disclaimer */}
            <div className="lg:col-span-7 flex flex-col justify-center text-white/95 space-y-4 lg:pl-2">
              <div className="text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed space-y-3 text-white/90">
                <p>
                  If you are looking for learning opportunities, skills development,
                  guidance or relevant community resources, we invite you to connect with
                  us.
                </p>
                <p className="text-white/80">
                  Tell us a little about what you are looking for. Our team will review
                  your enquiry and respond when possible.
                </p>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={onOpenInterest}
                  className="group inline-flex items-center gap-3 bg-[#FFD900] hover:bg-white text-[#01236A] font-bold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-xs uppercase tracking-wider shadow-xl hover:shadow-[#FFD900]/40 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  data-testid="register-interest-button"
                >
                  <span>Register Your Interest</span>
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>

              <small className="block text-[11px] sm:text-xs text-white/70 leading-relaxed max-w-xl pt-2.5 border-t border-white/15">
                Please note: Enquiries do not guarantee assistance or enrolment in a
                programme. Availability will depend on the foundation's operational
                readiness and the services offered at the time.
              </small>
            </div>
          </div>
        </div>
      </ScrollExpand>
    </section>
  );
}

export default HelpSection;
