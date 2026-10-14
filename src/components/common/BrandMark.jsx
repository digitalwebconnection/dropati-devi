import React from "react";

export function BrandMark({ className = "", testId = "brand-home-link" }) {
  return (
    <a
      href="#top"
      className={`group inline-flex items-center no-underline transition-transform duration-300 hover:scale-[1.03] ${className}`}
      data-testid={testId}
      aria-label="Dropati Devi Foundation Home"
    >
      <img
        src="/logo.png"
        alt="Dropati Devi Foundation"
        className="h-9 sm:h-11 md:h-16 w-auto object-contain transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-md"
      />
    </a>
  );
}

export default BrandMark;
