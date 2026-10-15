import React from "react";
import { BrandMark } from "@/components/common";
import { contactDetails } from "@/constants";

export function Footer() {
  return (
    <footer className="py-16 sm:py-20 bg-white text-[#01236A] border-t border-[#01236A]/15 text-xs font-sans relative overflow-hidden">
      {/* Subtle warm accent watermark ornament */}
      <div className="absolute top-0 right-10 text-[#FFD900]/20 text-9xl font-serif pointer-events-none select-none">
        ❀
      </div>

      <div className="max-w-[1180px] w-full px-5 md:px-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-[#01236A]/15 items-start relative z-10">
        <div data-aos="fade-up" data-aos-duration="800">
          <BrandMark className="text-[#01236A]" testId="footer-home-link" />
        </div>

        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
          <p className="font-serif text-base text-[#01236A] leading-snug">
            A legacy of strength.
            <br />A future of possibilities.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          className="flex flex-col gap-2"
        >
          <span className="uppercase tracking-wider text-[10px] text-[#01236A] font-bold font-mono">
            Connect with us
          </span>
          <a
            href={`mailto:${contactDetails.email}`}
            className="text-[#01236A] hover:text-[#FFD900] transition-colors duration-300 font-sans"
          >
            <strong>{contactDetails.email}</strong>
          </a>
          <div className="flex flex-col gap-1.5 mt-0.5">
            {contactDetails.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="text-[#01236A] hover:text-[#FFD900] transition-colors duration-300 font-sans"
              >
                <strong>{phone}</strong>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="max-w-[1180px] w-full px-5 md:px-8 mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#01236A]/75 text-[11px] relative z-10"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
      >
        <span>{contactDetails.copyright}</span>
        <span className="text-center sm:text-left max-w-md">
          {contactDetails.subTagline}
        </span>
        <a
          href="#top"
          className="hover:text-[#FFD900] transition-colors uppercase tracking-wider text-[#01236A] font-bold"
          data-testid="footer-back-top-link"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
