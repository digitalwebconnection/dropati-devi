import React from "react";
import { ArrowUpRight } from "lucide-react";

export function PurposeCard({ pillar, index }) {
  // Card themes strictly tuned to Blue #01236A and Yellow #FFD900
  const themes = [
    // 01 Learn (Royal Blue & Navy with Vivid Yellow Highlights)
    {
      outerBg: "bg-[#001747]",
      outerBorder: "border-[#01236A]",
      outerHoverBorder: "md:group-hover:border-[#FFD900]",
      outerShadow: "shadow-[0_16px_40px_rgba(1,35,106,0.35)]",
      gradient:
        "radial-gradient(circle at 65% 25%, #01236A 0%, #001747 45%, #001133 80%, #000c24 100%)",
      tabColor: "#001133",
      numColor: "text-[#FFD900]",
      arrowColor: "text-[#FFD900]",
      titleColor: "text-white",
      textColor: "text-blue-100/90",
      image: "/images/purpose/sovannkiry-sim-41fytYZ_-mM-unsplash.jpg",
      objectPosition: "object-[center_32%]",
      glowColor: "rgba(255, 217, 0, 0.45)",
    },
    // 02 Earn (Deep Navy & Pure Blue with Golden Accents)
    {
      outerBg: "bg-[#01236A]",
      outerBorder: "border-[#01236A]",
      outerHoverBorder: "md:group-hover:border-[#FFD900]",
      outerShadow: "shadow-[0_16px_40px_rgba(1,35,106,0.35)]",
      gradient:
        "radial-gradient(circle at 45% 20%, #001747 0%, #01236A 40%, #001133 75%, #000c24 100%)",
      tabColor: "#001747",
      numColor: "text-[#FFD900]",
      arrowColor: "text-[#FFD900]",
      titleColor: "text-white",
      textColor: "text-blue-100/90",
      image: "/images/purpose/firdaus-roslan-hLCHn4Somyk-unsplash.jpg",
      objectPosition: "object-[center_25%]",
      glowColor: "rgba(255, 217, 0, 0.45)",
    },
    // 03 Thrive (Midnight Blue with Bright Yellow Aura)
    {
      outerBg: "bg-[#001747]",
      outerBorder: "border-[#01236A]",
      outerHoverBorder: "md:group-hover:border-[#FFD900]",
      outerShadow: "shadow-[0_16px_40px_rgba(1,35,106,0.35)]",
      gradient:
        "radial-gradient(circle at 65% 22%, #01236A 0%, #001747 45%, #001133 80%, #000a1f 100%)",
      tabColor: "#001133",
      numColor: "text-[#FFD900]",
      arrowColor: "text-[#FFD900]",
      titleColor: "text-white",
      textColor: "text-blue-100/90",
      image: "/images/purpose/equalstock-3g6mKn8i1Ik-unsplash.jpg",
      objectPosition: "object-[center_20%]",
      glowColor: "rgba(255, 217, 0, 0.45)",
    },
    // 04 Belong (Solid Navy Blue with Luminous Golden Core)
    {
      outerBg: "bg-[#01236A]",
      outerBorder: "border-[#01236A]",
      outerHoverBorder: "md:group-hover:border-[#FFD900]",
      outerShadow: "shadow-[0_16px_40px_rgba(1,35,106,0.35)]",
      gradient:
        "radial-gradient(circle at 50% 20%, #001747 0%, #01236A 45%, #001133 80%, #000c24 100%)",
      tabColor: "#001747",
      numColor: "text-[#FFD900]",
      arrowColor: "text-[#FFD900]",
      titleColor: "text-white",
      textColor: "text-blue-100/90",
      image: "/images/purpose/penumalla-benson-7kSIUaT8ADo-unsplash.jpg",
      objectPosition: "object-[center_22%]",
      glowColor: "rgba(255, 217, 0, 0.45)",
    },
  ];

  const theme = themes[index % themes.length];
  const cardImage = pillar.image || theme.image;
  const cardPosition = pillar.objectPosition || theme.objectPosition || "object-center";
  const cardAlt = pillar.alt || `${pillar.title} purpose initiative`;

  // Resting state: top at ~235px (revealing 60-66% of the photo)
  // Hover state (desktop/tablet only, md+): slides down to ~295px (revealing up to 76-82% of the photo)
  const activeClass = "top-[235px] md:group-hover:top-[295px]";

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={Math.min(index * 60, 180)}
      data-aos-duration="650"
      data-testid={`purpose-card-${pillar.number}`}
      className={`group relative h-[390px] rounded-[28px] p-[2.5px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-none md:hover:-translate-y-1.5 ${
        theme.outerBg
      } ${theme.outerShadow} border ${theme.outerBorder} ${theme.outerHoverBorder}`}
    >
      {/* Inner Rounded Card Shell */}
      <div className="relative w-full h-full rounded-[25px] overflow-hidden">
        {/* Upper Background: Grainy Stippled Gradient */}
        <div
          className="absolute inset-0 transition-transform duration-700 md:group-hover:scale-105"
          style={{ background: theme.gradient }}
        />

        {/* SVG Noise / Stippled Film Grain Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.6'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Purpose Photography Viewport (Hero Visual Area) */}
        <div className="absolute top-0 left-0 right-0 h-[320px] overflow-hidden pointer-events-none">
          {/* Authentic Purpose Photography */}
          <img
            src={cardImage}
            alt={cardAlt}
            loading="lazy"
            className={`w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${cardPosition} scale-100 brightness-95 md:group-hover:scale-108 md:group-hover:brightness-105`}
          />

          {/* Deep Navy Gradient Vignette ensuring seamless blend into card body */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000c24] via-[#001133]/25 to-black/20 pointer-events-none" />

          {/* Golden Sheen on Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#FFD900]/15 transition-opacity duration-500 pointer-events-none opacity-0 md:group-hover:opacity-100" />

          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-16 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none opacity-25 md:group-hover:opacity-75"
            style={{ backgroundColor: theme.glowColor }}
          />
        </div>

        {/* Sliding Bottom Folder-Tab Sheet */}
        <div
          className={`absolute left-0 right-0 bottom-0 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 ${activeClass}`}
        >
          {/* Folder Tab Top Edge SVG */}
          <div className="relative w-full h-[54px] flex-shrink-0">
            <svg
              viewBox="0 0 320 54"
              preserveAspectRatio="none"
              className="w-full h-full block pointer-events-none"
            >
              {/* Solid tab fill */}
              <path
                d="M 0 14 Q 0 0 14 0 L 105 0 C 122 0 128 24 146 24 L 320 24 L 320 54 L 0 54 Z"
                fill={theme.tabColor}
              />
              {/* Refined golden accent line highlighting the folder tab cut edge */}
              <path
                d="M 0 14 Q 0 0 14 0 L 105 0 C 122 0 128 24 146 24 L 320 24"
                fill="none"
                stroke="rgba(255, 217, 0, 0.45)"
                strokeWidth="1.5"
              />
            </svg>

            {/* Pillar Number inside the left raised tab */}
            <span
              className={`absolute top-0.5 left-5 z-20 font-sans font-bold text-[28px] sm:text-[30px] tracking-tight transition-transform duration-300 md:group-hover:scale-105 ${theme.numColor}`}
            >
              {pillar.number}
            </span>

            {/* Diagonal Arrow Icon on the right shelf */}
            <div
              className={`absolute top-[28px] right-5 z-20 transition-transform duration-300 md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5 md:group-hover:scale-110 ${theme.arrowColor}`}
            >
              <ArrowUpRight className="w-5 h-5 stroke-[2.4]" />
            </div>
          </div>

          {/* Folder Sheet Body containing Title and Description */}
          <div
            style={{ backgroundColor: theme.tabColor }}
            className="w-full flex-1 -mt-[1px] px-5 pt-0.5 pb-4 flex flex-col justify-start"
          >
            <h3
              className={`font-sans text-[17px] sm:text-[18px] font-bold tracking-tight mb-1 transition-colors duration-300 ${theme.titleColor} md:group-hover:text-[#FFD900]`}
            >
              {pillar.title}
            </h3>
            <p
              className={`font-sans text-[12.5px] sm:text-[13px] leading-snug line-clamp-2 transition-opacity duration-300 ${theme.textColor}`}
            >
              {pillar.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurposeCard;
