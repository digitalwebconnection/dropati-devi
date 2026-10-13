import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import Eyebrow from "../common/Eyebrow";
import { siteImages } from "../../constants/siteData";

export function StorySection() {
  return (
    <section className="py-20 lg:py-32 bg-bone" id="story" data-testid="story-section">
      <div className="max-w-[1180px] w-full px-5 md:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div
          className="relative rounded-lg overflow-hidden shadow-2xl group"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={siteImages.story}
            alt="Dropati Jethani - The woman behind the mission"
            className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover object-center rounded-lg shadow-xl group-hover:scale-103 transition-transform duration-700"
          />
          {/* Authentic caption badge */}
          <div className="absolute bottom-4 left-4 right-4 bg-ink/85 backdrop-blur-md px-4 py-3 rounded text-bone text-xs flex items-center justify-between border border-white/10 shadow-lg">
            <div>
              <p className="font-serif text-sm text-gold font-normal">Dropati Jethani</p>
              <p className="text-[11px] text-bone/70">1945 — The Heart of Our Mission</p>
            </div>
            <a
              href="#moments"
              className="text-[11px] uppercase tracking-wider font-semibold text-gold hover:text-white transition-colors flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded"
            >
              Moments <ArrowDownRight size={14} />
            </a>
          </div>
        </div>

        <div
          className="flex flex-col space-y-5 text-muted leading-relaxed"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="150"
        >
          <Eyebrow text="The woman behind the mission" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink tracking-tight my-2">
            A WOMAN WHO <i className="text-gold italic font-serif">NEVER</i> GAVE UP
          </h2>
          <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
            Dropati Jethani's life was a story of resilience, sacrifice and
            unconditional love.
          </p>
          <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
            Born in Pakistan in 1945, she came to India with her family during
            Partition. Married at a young age, she faced financial hardship and
            the responsibilities of raising a family. She began sewing clothes to
            help her husband earn a living, working tirelessly to give her children
            a better future.
          </p>
          <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
            But her greatest legacy went beyond what she built for her family.
            She was a woman people turned to for comfort, guidance and help. She
            gave without expecting anything in return and faced life's challenges
            with courage, patience and faith.
          </p>
          <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
            Her journey reminds us that strength is not always loud. Sometimes,
            it is found in the hands that work, the heart that gives and the
            spirit that refuses to give up.
          </p>
          <div className="flex items-center gap-6 pt-2 flex-wrap" data-aos="fade-up" data-aos-delay="300">
            <a
              className="inline-flex items-center gap-2 text-terracotta-dark hover:text-terracotta font-medium underline underline-offset-8 transition-colors"
              href="#moments"
              data-testid="discover-life-link"
            >
              Cherished Moments Gallery <ArrowDownRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
