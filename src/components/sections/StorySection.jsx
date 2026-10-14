import React, { useState } from "react";
import { ArrowDownRight } from "lucide-react";
import Eyebrow from "../common/Eyebrow";
import ArchedHeroImage from "../common/ArchedPixelImage";

const storyImages = [
  {
    src: "/images/moments/moment-6-grace.jpg",
    title: "Dropati Jethani",
    subtitle: "1945 — The Heart of Our Mission",
    alt: "Dropati Jethani - The woman behind the mission",
  },
  {
    src: "/images/moments/moment-2-wisdom.jpg",
    title: "Quiet Strength & Wisdom",
    subtitle: "Silent Courage & Enduring Grace",
    alt: "Dropati Devi in quiet contemplation",
  },

  {
    src: "/images/moments/moment-4-sweet-moments.jpg",
    title: "Sweet Milestones",
    subtitle: "Celebrating Life & Family",
    alt: "Dropati Devi celebrating her birthday",
  },
  {
    src: "/images/moments/moment-1-celebration.jpg",
    title: "Joy & Togetherness",
    subtitle: "Surrounded by Love and Laughter",
    alt: "Dropati Devi with family celebrating",
  },
];

export function StorySection() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const currentPhoto = storyImages[activePhotoIndex] || storyImages[0];

  return (
    <section
      className="py-20 lg:py-28 bg-bone overflow-hidden"
      id="story"
      data-testid="story-section"
    >
      <div className="max-w-[1400px] w-full px-4 sm:px-6 lg:px-10 xl:px-14 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Side: Pixel Reveal Image Effect */}
          <div
            className="lg:col-span-6 w-full pt-2 pb-2"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <ArchedHeroImage
              images={storyImages.map((img) => img.src)}
              alt={currentPhoto.alt}
              currentIndex={activePhotoIndex}
              onIndexChange={setActivePhotoIndex}
              customGrid={{ rows: 6, cols: 6 }}
              glowColors="from-[#FFD900]/30 via-[#01236A]/25 to-[#FFD900]/20"
              primaryDotColor="fill-[#FFD900]/60"
              secondaryDotColor="fill-[#01236A]/40"
              roundedClass="rounded-2xl sm:rounded-xl"
              imageHeightClass="h-[420px] sm:h-[500px] lg:h-[560px] xl:h-[600px]"
            >
              {/* Authentic caption badge pinned to the bottom of the image frame */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-[#01236A]/95 backdrop-blur-md px-4 py-3 rounded-xl text-white text-xs flex items-center justify-between border border-white/10 shadow-2xl pointer-events-auto">
                <div className="pr-2">
                  <p className="font-serif text-sm sm:text-[15px] text-[#FFD900] font-normal leading-snug transition-all duration-500">
                    {currentPhoto.title}
                  </p>
                  <p className="text-[11px] sm:text-xs text-white/80 transition-all duration-500">
                    {currentPhoto.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2.5 flex-shrink-0">
                  {/* Photo indicator dots - clickable to navigate photos */}
                  <div
                    className="hidden sm:flex items-center gap-1.5 mr-1"
                    aria-hidden="true"
                  >
                    {storyImages.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActivePhotoIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                          idx === activePhotoIndex
                            ? "bg-[#FFD900] w-4"
                            : "bg-white/30 hover:bg-white/60 w-1.5"
                        }`}
                        aria-label={`Show photo ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <a
                    href="#moments"
                    className="text-[11px] uppercase tracking-wider font-bold text-[#FFD900] hover:text-white transition-colors flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-white/5"
                  >
                    Moments <ArrowDownRight size={14} />
                  </a>
                </div>
              </div>
            </ArchedHeroImage>
          </div>

          <div
            className="lg:col-span-6 flex flex-col space-y-5 text-muted leading-relaxed"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="150"
          >
            <Eyebrow text="The woman behind the mission" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#01236A] tracking-tight my-2">
              A WOMAN WHO <i className="text-[#FFD900] italic font-serif">NEVER</i>{" "}
              GAVE UP
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
              Dropati Jethani's life was a story of resilience, sacrifice and
              unconditional love.
            </p>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
              Born in Pakistan in 1945, she came to India with her family during
              Partition. Married at a young age, she faced financial hardship
              and the responsibilities of raising a family. She began sewing
              clothes to help her husband earn a living, working tirelessly to
              give her children a better future.
            </p>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
              But her greatest legacy went beyond what she built for her family.
              She was a woman people turned to for comfort, guidance and help.
              She gave without expecting anything in return and faced life's
              challenges with courage, patience and faith.
            </p>
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed">
              Her journey reminds us that strength is not always loud.
              Sometimes, it is found in the hands that work, the heart that
              gives and the spirit that refuses to give up.
            </p>
            <div
              className="flex items-center gap-6 pt-2 flex-wrap"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <a
                className="inline-flex items-center gap-2 text-[#01236A] hover:text-[#01236A]/80 font-bold underline underline-offset-8 transition-colors"
                href="#moments"
                data-testid="discover-life-link"
              >
                Cherished Moments Gallery <ArrowDownRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
