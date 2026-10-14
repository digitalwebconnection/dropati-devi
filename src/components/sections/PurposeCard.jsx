import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function PurposeCard({ pillar, index }) {
  const [isTouched, setIsTouched] = useState(false);

  // Card themes matching the user's before & after designs
  const themes = [
    // 01 Learn (Deep Indigo / Electric Violet)
    {
      outerBg: "bg-[#06081e]",
      outerBorder: "border-[#202756]",
      outerHoverBorder: "group-hover:border-[#3c4a9c]",
      outerShadow: "shadow-[0_16px_40px_rgba(4,6,26,0.35)]",
      gradient:
        "radial-gradient(circle at 65% 25%, #4338ca 0%, #2e268f 35%, #151348 70%, #06081e 100%)",
      tabColor: "#080c2c",
      numColor: "text-white",
      arrowColor: "text-white",
      titleColor: "text-white",
      textColor: "text-slate-300",
      image: "/images/cards/card_learn.jpg",
      glowColor: "rgba(99, 102, 241, 0.45)",
    },
    // 02 Earn (Sunset Ember into Off-White Slate)
    {
      outerBg: "bg-[#dbe2ec]",
      outerBorder: "border-[#c4ccd8]",
      outerHoverBorder: "group-hover:border-[#a8b5c8]",
      outerShadow: "shadow-[0_16px_40px_rgba(0,0,0,0.06)]",
      gradient:
        "radial-gradient(circle at 35% 20%, #ff4d00 0%, #d82b08 30%, #4a0d05 70%, #120908 100%)",
      tabColor: "#edf0f5",
      numColor: "text-[#181a20]",
      arrowColor: "text-[#181a20]",
      titleColor: "text-[#181a20]",
      textColor: "text-[#64748b]",
      image: "/images/cards/card_earn.jpg",
      glowColor: "rgba(249, 115, 22, 0.45)",
    },
    // 03 Thrive (Celestial Cyan Ice into Deep Graphite)
    {
      outerBg: "bg-[#0b1016]",
      outerBorder: "border-[#1e2733]",
      outerHoverBorder: "group-hover:border-[#384b63]",
      outerShadow: "shadow-[0_16px_40px_rgba(0,0,0,0.45)]",
      gradient:
        "radial-gradient(circle at 65% 22%, #7dd3fc 0%, #38bdf8 25%, #0369a1 45%, #082f49 70%, #070d13 100%)",
      tabColor: "#0e141b",
      numColor: "text-white",
      arrowColor: "text-white",
      titleColor: "text-white",
      textColor: "text-slate-300",
      image: "/images/cards/card_thrive.jpg",
      glowColor: "rgba(56, 189, 248, 0.45)",
    },
    // 04 Belong (Imperial Gold / Terracotta Noir)
    {
      outerBg: "bg-[#140a08]",
      outerBorder: "border-[#3d2019]",
      outerHoverBorder: "group-hover:border-[#6d3425]",
      outerShadow: "shadow-[0_16px_40px_rgba(0,0,0,0.45)]",
      gradient:
        "radial-gradient(circle at 50% 20%, #fbbf24 0%, #d97706 25%, #9a3b26 50%, #42160d 75%, #140a08 100%)",
      tabColor: "#170c09",
      numColor: "text-white",
      arrowColor: "text-[#e5a93b]",
      titleColor: "text-white",
      textColor: "text-[#d5c3b6]",
      image: "/images/cards/card_belong.jpg",
      imageFilter: "hue-rotate(280deg) saturate(1.3)",
      glowColor: "rgba(229, 169, 59, 0.45)",
    },
  ];

  const theme = themes[index % themes.length];

  // Resting state: top at ~96px (Image 1)
  // Hover / Touch state: top slides down to ~180px (Image 2)
  const activeClass = isTouched
    ? "top-[180px]"
    : "top-[96px] group-hover:top-[180px]";

  const activeImageClass = isTouched
    ? "opacity-100 scale-100 translate-y-0"
    : "opacity-0 scale-75 -translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0";

  return (
    <article
      data-aos="fade-up"
      data-aos-delay={index * 120}
      data-aos-duration="800"
      data-testid={`purpose-card-${pillar.number}`}
      onClick={() => setIsTouched((prev) => !prev)}
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
          className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.6'/%3E%3C/svg%3E")`,
          }}
        />

        {/* 3D Glass Artwork Viewport in the Upper Chamber - Increased Size */}
        <div className="absolute top-1 left-0 right-0 h-[180px] flex items-center justify-center pointer-events-none overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div
            className={`absolute w-44 h-44 rounded-full blur-2xl transition-opacity duration-500 ${
              isTouched ? "opacity-75" : "opacity-0 group-hover:opacity-75"
            }`}
            style={{ backgroundColor: theme.glowColor }}
          />

          {/* 3D Glass Artwork (Enlarged) */}
          <img
            src={theme.image}
            alt={`${pillar.title} 3D element`}
            style={{
              filter: theme.imageFilter || undefined,
              maskImage:
                "radial-gradient(circle at center, black 65%, transparent 100%)",
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
    </article>
  );
}

export default PurposeCard;
