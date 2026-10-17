import React, { useState, useEffect } from "react";
import { cn } from "@/utils";

export function CubeButton({
  frontText,
  topText,
  frontIcon,
  topIcon,
  onClick,
  href,
  className = "",
  styleVariant = "primary", // "navbar" | "primary" | "secondary"
  dataTestId,
  autoHover = false,
  autoHoverDelay = 0,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto flip every 3 seconds if autoHover is enabled
  useEffect(() => {
    if (!autoHover) return;

    let revertTimeout;
    const interval = setInterval(() => {
      if (!isHovered) {
        setIsFlipped(true);
        revertTimeout = setTimeout(() => {
          setIsFlipped(false);
        }, 1300); // Display top face for 1.3 seconds
      }
    }, 3000 + autoHoverDelay);

    return () => {
      clearInterval(interval);
      if (revertTimeout) clearTimeout(revertTimeout);
    };
  }, [autoHover, autoHoverDelay, isHovered]);

  // Styles strictly using Blue #01236A and Yellow #FFD900
  const variantStyles = {
    navbar: {
      front: "bg-[#FFD900] text-[#01236A] font-bold shadow-md",
      top: "bg-[#01236A] text-[#FFD900] font-bold shadow-lg",
      frontBorder: "inset 0 0 0 2px #FFD900",
      topBorder: "inset 0 0 0 2px #FFD900",
      dimensions: "w-[210px] h-[44px]",
      halfHeight: "22px",
    },
    primary: {
      front: "bg-[#FFD900] text-[#01236A] font-bold shadow-lg",
      top: "bg-[#01236A] text-[#FFD900] font-bold shadow-xl",
      frontBorder: "inset 0 0 0 2px #FFD900",
      topBorder: "inset 0 0 0 2px #FFD900",
      dimensions: "w-[215px] h-[48px]",
      halfHeight: "24px",
    },
    secondary: {
      front: "bg-[#01236A] text-white font-semibold shadow-md",
      top: "bg-[#FFD900] text-[#01236A] font-bold shadow-xl",
      frontBorder: "inset 0 0 0 2px #FFD900",
      topBorder: "inset 0 0 0 2px #FFD900",
      dimensions: "w-[195px] h-[48px]",
      halfHeight: "24px",
    },
  };

  const currentVariant = variantStyles[styleVariant] || variantStyles.primary;

  const content = (
    <div
      className={`cube-element relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(.17,.67,.14,.93)] ${
        isFlipped ? "[transform:rotateX(-90deg)]" : ""
      } group-hover:[transform:rotateX(-90deg)]`}
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "50% 50%",
      }}
    >
      {/* Front Face (Default State) */}
      <span
        className={`cube-side absolute inset-0 flex items-center justify-center gap-2.5 px-4 font-sans font-bold text-[11px] uppercase tracking-wider rounded-sm select-none transition-colors duration-300 ${currentVariant.front}`}
        style={{
          boxShadow: currentVariant.frontBorder,
          transform: `translate3d(0, 0, ${currentVariant.halfHeight})`,
          backfaceVisibility: "hidden",
        }}
      >
        <span>{frontText}</span>
        {frontIcon && <span className="flex-shrink-0">{frontIcon}</span>}
      </span>

      {/* Top Face (Revealed on 3D Flip Hover) */}
      <span
        className={`cube-side absolute inset-0 flex items-center justify-center gap-2.5 px-4 font-sans font-bold text-[11px] uppercase tracking-wider rounded-sm select-none transition-colors duration-300 ${currentVariant.top}`}
        style={{
          boxShadow: currentVariant.topBorder,
          transform: `rotateX(90deg) translate3d(0, 0, ${currentVariant.halfHeight})`,
          backfaceVisibility: "hidden",
        }}
      >
        <span>{topText || frontText}</span>
        {topIcon ? (
          <span className="flex-shrink-0">{topIcon}</span>
        ) : (
          frontIcon && <span className="flex-shrink-0">{frontIcon}</span>
        )}
      </span>
    </div>
  );

  const wrapperClasses = cn(
    "group inline-block [perspective:1000px] cursor-pointer",
    currentVariant.dimensions,
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={wrapperClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-testid={dataTestId}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={wrapperClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={dataTestId}
    >
      {content}
    </button>
  );
}

export default CubeButton;
