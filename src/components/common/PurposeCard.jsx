import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function PurposeCard({ pillar, index }) {
  const [isTouched, setIsTouched] = useState(false);

  // Card themes strictly tuned to Blue #01236A and Yellow #FFD900
  const themes = [
    // 01 Learn (Royal Blue & Navy with Vivid Yellow Highlights)
    {
      outerBg: "bg-[#001747]",
      outerBorder: "border-[#01236A]",
      outerHoverBorder: "group-hover:border-[#FFD900]",
      outerShadow: "shadow-[0_16px_40px_rgba(1,35,106,0.35)]",
      gradient:
        "radial-gradient(circle at 65% 25%, #01236A 0%, #001747 45%, #001133 80%, #000c24 100%)",
      tabColor: "#001133",
      numColor: "text-[#FFD900]",
      arrowColor: "text-[#FFD900]",
      titleColor: "text-white",
      textColor: "text-blue-100/90",
      image: "/images/purpose/purpose-1-learn.webp",
      glowColor: "rgba(255, 217, 0, 0.45)",
    },
    // 02 Earn (Deep Navy & Pure Blue with Golden Accents)
    {
      outerBg: "bg-[#01236A]",
      outerBorder: "border-[#01236A]",
      outerHoverBorder: "group-hover:border-[#FFD900]",
      outerShadow: "shadow-[0_16px_40px_rgba(1,35,106,0.35)]",
      gradient:
        "radial-gradient(circle at 45% 20%, #001747 0%, #01236A 40%, #001133 75%, #000c24 100%)",
      tabColor: "#001747",
      numColor: "text-[#FFD900]",
      arrowColor: "text-[#FFD900]",
      titleColor: "text-white",
      textColor: "text-blue-100/90",
      image: "/images/purpose/purpose-2-earn.webp",
      glowColor: "rgba(255, 217, 0, 0.45)",
    },
    // 03 Thrive (Midnight Blue with Bright Yellow Aura)
    {
      outerBg: "bg-[#001747]",
      outerBorder: "border-[#01236A]",
      outerHoverBorder: "group-hover:border-[#FFD900]",
      outerShadow: "shadow-[0_16px_40px_rgba(1,35,106,0.35)]",
      gradient:
        "radial-gradient(circle at 65% 22%, #01236A 0%, #001747 45%, #001133 80%, #000a1f 100%)",
      tabColor: "#001133",
      numColor: "text-[#FFD900]",
      arrowColor: "text-[#FFD900]",
      titleColor: "text-white",
      textColor: "text-blue-100/90",
      image: "/images/purpose/purpose-3-thrive.webp",
      glowColor: "rgba(255, 217, 0, 0.45)",
    },
    // 04 Belong (Solid Navy Blue with Luminous Golden Core)
    {
      outerBg: "bg-[#01236A]",
      outerBorder: "border-[#01236A]",
      outerHoverBorder: "group-hover:border-[#FFD900]",
      outerShadow: "shadow-[0_16px_40px_rgba(1,35,106,0.35)]",
      gradient:
        "radial-gradient(circle at 50% 20%, #001747 0%, #01236A 45%, #001133 80%, #000c24 100%)",
      tabColor: "#001747",
      numColor: "text-[#FFD900]",
      arrowColor: "text-[#FFD900]",
      titleColor: "text-white",
      textColor: "text-blue-100/90",
      image: "/images/purpose/purpose-4-belong.webp",
      glowColor: "rgba(255, 217, 0, 0.45)",
    },
  ];

  const theme = themes[index % themes.length];

  // Resting state: top at ~96px
  // Hover / Touch state: top slides down to ~180px
  const activeClass = isTouched ? "top-[180px]" : "top-[96px] group-hover:top-[180px]";

  const activeImageClass = isTouched
    ? "opacity-100 scale-100 translate-y-0"
    : "opacity-85 scale-90 translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0";

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 120}
      data-aos-duration="800"
      data-testid={`purpose-card-${pillar.number}`}
      role="button"
      tabIndex={0}
      aria-expanded={isTouched}
      onClick={() => setIsTouched((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsTouched((prev) => !prev);
        }
      }}
      className={`group relative h-[375px] rounded-[28px] p-[2.5px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer hover:-translate-y-1.5 ${
        theme.outerBg
      } ${theme.outerShadow} border ${theme.outerBorder} ${theme.outerHoverBorder}`}
    >
      {/* Inner Rounded Card Shell */}
      <div className="relative w-full h-full rounded-[25px] overflow-hidden">
        {/* Upper Background: Grainy Stippled Gradient */}
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{ background: theme.gradient }}
        />

        {/* SVG Noise / Stippled Film Grain Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.6'/%3E%3C/svg%3E")`,
          }}
        />

        {/* 3D Glass Artwork Viewport in the Upper Chamber */}
        <div className="absolute top-1 left-0 right-0 h-[180px] flex items-center justify-center pointer-events-none overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div
            className={`absolute w-44 h-44 rounded-full blur-2xl transition-opacity duration-500 ${
              isTouched ? "opacity-75" : "opacity-35 group-hover:opacity-75"
            }`}
            style={{ backgroundColor: theme.glowColor }}
          />

          {/* 3D Glass Artwork */}
          <img
            src={theme.image}
            alt={`${pillar.title} 3D element`}
            style={{
              maskImage: "radial-gradient(circle at center, black 65%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 65%, transparent 100%)",
            }}
            className={`w-[175px] h-[175px] sm:w-[190px] sm:h-[190px] object-contain mix-blend-screen drop-shadow-[0_16px_28px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeImageClass}`}
          />
        </div>

        {/* Sliding Bottom Folder-Tab Sheet */}
        <div
          className={`absolute left-0 right-0 bottom-0 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 ${activeClass}`}
        >
          {/* Folder Tab Top Edge SVG */}
          <div className="relative w-full h-[60px] flex-shrink-0">
            <svg
              viewBox="0 0 320 60"
              preserveAspectRatio="none"
              className="w-full h-full block pointer-events-none"
            >
              <path
                d="M 0 16 Q 0 0 16 0 L 115 0 C 132 0 138 28 158 28 L 320 28 L 320 60 L 0 60 Z"
                fill={theme.tabColor}
              />
            </svg>

            {/* Pillar Number inside the left raised tab */}
            <span
              className={`absolute top-1.5 left-5 z-20 font-sans font-bold text-3xl sm:text-[32px] tracking-tight transition-transform duration-300 group-hover:scale-105 ${theme.numColor}`}
            >
              {pillar.number}
            </span>

            {/* Diagonal Arrow Icon on the right shelf */}
            <div
              className={`absolute top-[32px] right-5 z-20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110 ${theme.arrowColor}`}
            >
              <ArrowUpRight className="w-5 h-5 stroke-[2.4]" />
            </div>
          </div>

          {/* Folder Sheet Body containing Title and Description */}
          <div
            style={{ backgroundColor: theme.tabColor }}
            className="w-full flex-1 -mt-[1px] px-5 pb-5 pt-1.5 flex flex-col justify-end"
          >
            <h3
              className={`font-sans text-[17px] sm:text-[18px] font-bold tracking-tight mb-1 transition-colors duration-300 ${theme.titleColor}`}
            >
              {pillar.title}
            </h3>
            <p
              className={`font-sans text-[12.5px] sm:text-[13px] leading-snug line-clamp-3 transition-opacity duration-300 ${theme.textColor}`}
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
