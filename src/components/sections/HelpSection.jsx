import React from "react";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "../common/Eyebrow";

export function HelpSection({ onOpenInterest }) {
  return (
    <section className="py-20 lg:py-28 bg-terracotta-dark text-white" data-testid="help-section">
      <div className="max-w-[1180px] w-full px-5 md:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <Eyebrow text="Get help" light={true} />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight my-4">
            YOUR NEXT STEP
            <br />
            <i className="text-gold italic font-serif">STARTS HERE</i>
          </h2>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="150"
        >
          <div className="text-[15px] sm:text-[16px] text-[#f4eae0] leading-relaxed space-y-4 mb-8">
            <p>
              Everyone deserves to be heard with dignity and respect.
            </p>
            <p>
              If you are looking for learning opportunities, skills development,
              guidance or relevant community resources, we invite you to connect with us.
            </p>
            <p>
              Tell us a little about what you are looking for. Our team will review your
              enquiry and respond when possible.
            </p>
          </div>
          <button
            className="inline-flex items-center justify-center gap-3 bg-white text-terracotta-dark hover:bg-bone hover:text-terracotta font-sans font-semibold text-[11px] uppercase tracking-wider px-6 py-4 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            onClick={onOpenInterest}
            data-testid="register-interest-button"
          >
            Register Your Interest <ArrowUpRight size={17} />
          </button>
          <small className="block mt-4 text-xs text-[#eeddd0]/80 leading-normal max-w-lg">
            Please note: Enquiries do not guarantee assistance or enrolment in a
            programme. Availability will depend on the foundation's operational
            readiness and the services offered at the time.
          </small>
        </div>
      </div>
    </section>
  );
}

export default HelpSection;
