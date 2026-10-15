import React from "react";
import { cn } from "@/utils";

export function Eyebrow({ text, light = false, className = "" }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 uppercase tracking-[0.18em] font-bold text-[10px] font-sans",
        light ? "text-[#FFD900]" : "text-[#01236A]",
        className
      )}
    >
      <span className="block h-[1px] w-8 bg-current transition-all duration-500" />
      <span>{text}</span>
    </div>
  );
}

export default Eyebrow;
