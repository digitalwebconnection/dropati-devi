import { Eyebrow, PurposeCard } from "@/components/common";
import { purposePillars } from "@/constants";

export function PurposeSection() {
  return (
    <section
      className="py-14 sm:py-20 lg:py-32 bg-sand border-y border-line overflow-hidden"
      id="purpose"
      data-testid="purpose-section"
    >
      <div className="max-w-[1240px] w-full px-5 md:px-8 mx-auto">
        {/* Section Header */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 items-start justify-items-start text-left mb-10 sm:mb-14 lg:mb-16"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div>
            <Eyebrow text="Our purpose" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink tracking-tight my-3">
              EVERY WOMAN DESERVES
              <br />
              AN <i className="text-gold italic font-serif">OPPORTUNITY</i>
            </h2>
          </div>
          <div className="text-[15px] sm:text-[16px] text-muted leading-relaxed space-y-4">
            <p>
              We believe that a woman's circumstances should never define the limits of
              her future.
            </p>
            <p>
              Through our proposed initiatives, we aim to help women and girls access
              learning opportunities, develop practical skills, explore livelihoods and
              find the support they need to move forward.
            </p>
            <p>
              Our goal is simple: to help create a future where women can make informed
              choices, build confidence and shape their own lives.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-6">
          {purposePillars.map((pillar, index) => (
            <PurposeCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PurposeSection;
