import React from "react";

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
}) {
  // Styles for each variant
  const variantStyles = {
    navbar: {
      front: "bg-white text-ink shadow-md",
      top: "bg-terracotta text-white shadow-lg",
      frontBorder: "inset 0 0 0 2px rgba(229, 169, 59, 0.4)",
      topBorder: "inset 0 0 0 2px rgba(255, 255, 255, 0.9)",
      dimensions: "w-[210px] h-[44px]",
      halfHeight: "22px",
    },
    primary: {
      front: "bg-white text-terracotta-dark shadow-md",
      top: "bg-terracotta text-white shadow-xl",
      frontBorder: "inset 0 0 0 3px #ffffff",
      topBorder: "inset 0 0 0 3px #ffffff",
      dimensions: "w-[215px] h-[48px]",
      halfHeight: "24px",
    },
    secondary: {
      front: "bg-[#271914] text-white border border-white/25 shadow-md",
      top: "bg-gold text-ink font-bold shadow-xl",
      frontBorder: "inset 0 0 0 2px rgba(255, 255, 255, 0.2)",
      topBorder: "inset 0 0 0 3px #ffffff",
      dimensions: "w-[195px] h-[48px]",
      halfHeight: "24px",
    },
  };

  const currentVariant = variantStyles[styleVariant] || variantStyles.primary;

  const content = (
    <div
      className="cube-element relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(.17,.67,.14,.93)] group-hover:[transform:rotateX(-90deg)]"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "50% 50%",
      }}
    >
      {/* Front Face (Default State) */}
      <span
        className={`cube-side absolute inset-0 flex items-center justify-center gap-2.5 px-4 font-sans font-semibold text-[11px] uppercase tracking-wider rounded-sm select-none transition-colors duration-300 ${currentVariant.front}`}
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
        className={`cube-side absolute inset-0 flex items-center justify-center gap-2.5 px-4 font-sans font-semibold text-[11px] uppercase tracking-wider rounded-sm select-none transition-colors duration-300 ${currentVariant.top}`}
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

  const wrapperClasses = `group inline-block ${currentVariant.dimensions} [perspective:1000px] cursor-pointer ${className}`;

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
