import React from "react";
import { cn } from "@/utils";

export function BrandMark({ className = "", testId = "brand-home-link" }) {
  return (
    <a
      href="#top"
      className={cn(
        "group inline-flex items-center no-underline transition-transform duration-300 hover:scale-[1.03]",
        className
      )}
      data-testid={testId}
      aria-label="Dropati Devi Foundation Home"
    >
      <picture>
        <source srcSet="/logo.webp" type="image/webp" />
        <img
          src="/logo.webp"
          alt="Dropati Devi Foundation"
          className="h-9 sm:h-11 md:h-16 w-auto object-contain transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-md"
        />
      </picture>
    </a>
  );
}

export default BrandMark;
