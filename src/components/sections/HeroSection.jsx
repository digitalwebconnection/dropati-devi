import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import Eyebrow from "../common/Eyebrow";
import CubeButton from "../common/CubeButton";
import { siteImages } from "../../constants/siteData";

export function HeroSection() {
  return (
    <section
      className="relative min-h-7xl lg:min-h-screen text-white flex items-center overflow-hidden py-12 sm:py-18"
      id="top"
      data-testid="hero-section"
    >
      {/* Background with subtle ambient zoom */}
      <div
        className="absolute inset-0 bg-center bg-cover scale-100 transition-transform duration-[12000ms] ease-out hover:scale-105 pointer-events-none"
        style={{ backgroundImage: `url("${encodeURI(siteImages.hero)}")` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-[1180px] w-full px-5 md:px-8 mx-auto pt-10 md:pt-16">
        <div data-aos="fade-down" data-aos-duration="800">
          <Eyebrow text="A legacy of strength" light={true} />
        </div>

        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="150"
          className="max-w-7xl my-6 font-serif text-[42px] sm:text-[58px] lg:text-[66px] leading-[1.02] tracking-tight font-normal text-white"
        >
          HER STRENGTH LIVES ON.
          <br />
          <i className="text-gold italic font-serif inline-block transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(229,169,59,0.35)]">
            HER LEGACY.
          </i>{" "}
          THEIR FUTURE.
        </h1>

        {/* <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="300"
          className="max-w-4xl text-[15px] sm:text-[16px] leading-[2.40] text-[#f4eae0] space-y-3.5"
        >
          <p>
            Inspired by Dropati Jethani, we envision a world where every woman
            and girl has the opportunity to learn, grow, earn and live with
            dignity.
          </p>
          <p>
            Her life taught us that courage can overcome hardship, compassion
            can bring people together, and even the smallest act of kindness can
            change a life.
          </p>
          <p>
            Today, we aspire to carry those values forward by creating
            opportunities for women and girls across India.
          </p>
        </div> */}

        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="450"
          className="flex items-center gap-6 sm:gap-7 mt-9 flex-wrap"
        >
          <CubeButton
            href="#purpose"
            frontText="Explore Our Mission"
            topText="Discover Purpose"
            frontIcon={<ArrowUpRight size={17} />}
            topIcon={<ArrowUpRight size={17} />}
            styleVariant="primary"
            dataTestId="hero-mission-button"
          />
          <CubeButton
            href="#story"
            frontText="Read Her Story"
            topText="Her Living Legacy"
            frontIcon={<ArrowDownRight size={17} />}
            topIcon={<ArrowDownRight size={17} />}
            styleVariant="secondary"
            dataTestId="hero-story-button"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
