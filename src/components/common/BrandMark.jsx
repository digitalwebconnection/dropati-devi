import React from "react";

export function BrandMark({ className = "", testId = "brand-home-link" }) {
  return (
    <a
      href="#top"
      className={`group flex items-center gap-2.5 text-inherit font-sans text-xs font-bold leading-tight tracking-tight no-underline transition-transform duration-300 hover:scale-[1.02] ${className}`}
      data-testid={testId}
    >
      <span className="grid place-items-center border border-current rounded-full w-[34px] h-[34px] font-serif text-2xl italic font-semibold transition-all duration-300 group-hover:border-gold group-hover:text-gold group-hover:shadow-[0_0_15px_rgba(229,169,59,0.35)]">
        d
      </span>
      <span>
        Dropati Devi
        <br />
        <em className="font-serif font-normal text-[13px] not-italic">Foundation</em>
      </span>
    </a>
  );
}

export default BrandMark;
