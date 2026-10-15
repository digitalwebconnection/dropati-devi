"use client";
import React, { useEffect, useId, useState, useCallback, useRef, useMemo } from "react";

// Helper for conditional classNames
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* =========================================================================
   1. Dot Pattern SVG Component
   ========================================================================= */
export function DotPattern({
  width = 16,
  height = 16,
  cx = 1,
  cy = 1,
  cr = 1,
  className = "",
  ...props
}) {
  const id = useId();
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

/* =========================================================================
   2. Pixel Grid Image Reveal Component
   ========================================================================= */
export function PixelImage({
  src,
  srcs,
  customGrid = { rows: 6, cols: 6 },
  grayscaleAnimation = false,
  className = "",
  alt = "Image display",
  currentIndex: controlledIndex,
  onIndexChange,
}) {
  const { rows, cols } = customGrid;
  const images = useMemo(
    () => (srcs && srcs.length > 0 ? srcs : src ? [src] : []),
    [srcs, src]
  );
  const [internalIndex, setInternalIndex] = useState(0);
  const activeIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;

  const [activePixels, setActivePixels] = useState(() => new Set());
  const activeIndexRef = useRef(activeIndex);
  const onIndexChangeRef = useRef(onIndexChange);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
    onIndexChangeRef.current = onIndexChange;
  });

  // Preload images into browser memory
  useEffect(() => {
    images.forEach((imgUrl) => {
      if (!imgUrl) return;
      const img = new Image();
      img.src = imgUrl;
    });
  }, [images]);

  // When controlled index changes from outside, reset revealed pixels to reveal the newly chosen image
  const prevControlledIndexRef = useRef(controlledIndex);
  useEffect(() => {
    if (
      controlledIndex !== undefined &&
      controlledIndex !== prevControlledIndexRef.current
    ) {
      prevControlledIndexRef.current = controlledIndex;
      setActivePixels(new Set());
    }
  }, [controlledIndex]);

  // Pixel reveal & slideshow animation loop
  useEffect(() => {
    if (images.length === 0) return;
    const totalPixels = rows * cols;
    let timeoutId;

    // Once all pixels are revealed:
    if (activePixels.size >= totalPixels) {
      if (images.length > 1) {
        // Pause 3.2 seconds for viewer to see and admire the full photo
        timeoutId = setTimeout(() => {
          setActivePixels(new Set());
          const nextIdx = (activeIndexRef.current + 1) % images.length;
          setInternalIndex(nextIdx);
          if (onIndexChangeRef.current) {
            onIndexChangeRef.current(nextIdx);
          }
        }, 3200);
        return () => clearTimeout(timeoutId);
      }
      return;
    }

    // Interval to reveal 3-4 random pixels periodically
    const revealInterval = setInterval(() => {
      setActivePixels((prev) => {
        const nextSet = new Set(prev);
        const unrevealed = [];
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const key = `${r}-${c}`;
            if (!nextSet.has(key)) {
              unrevealed.push(key);
            }
          }
        }
        if (unrevealed.length > 0) {
          const numToReveal = Math.min(4, unrevealed.length);
          for (let i = 0; i < numToReveal; i++) {
            const randomIndex = Math.floor(Math.random() * unrevealed.length);
            nextSet.add(unrevealed[randomIndex]);
            unrevealed.splice(randomIndex, 1);
          }
        }
        return nextSet;
      });
    }, 130);

    return () => clearInterval(revealInterval);
  }, [activePixels.size, rows, cols, images.length]);

  // Reveal pixel on user mouse hover
  const handleMouseEnter = useCallback((r, c) => {
    const id = `${r}-${c}`;
    setActivePixels((prev) => {
      if (prev.has(id)) return prev;
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  }, []);

  const currentSrc = images[activeIndex] || "";

  return (
    <div
      className={cn(
        "relative overflow-hidden group bg-[#001747] w-full h-full",
        className
      )}
    >
      <img
        src={currentSrc}
        className={cn(
          "absolute inset-0 w-full h-full object-cover object-center transition-all duration-700",
          grayscaleAnimation ? "grayscale group-hover:grayscale-0" : ""
        )}
        alt={alt}
      />

      {/* Grid overlay of pixel blocks */}
      <div
        className="absolute inset-0 z-10 grid"
        style={{
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => {
            const id = `${r}-${c}`;
            const isActive = activePixels.has(id);
            return (
              <div
                key={id}
                onMouseEnter={() => handleMouseEnter(r, c)}
                className={cn(
                  "w-full h-full transition-opacity duration-700 ease-out select-none",
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100 bg-[#001747]"
                )}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

/* =========================================================================
   3. Main Image Frame with Glow & Background Dots
   ========================================================================= */
export function ArchedHeroImage({
  images,
  alt = "Hero Showcase",
  className = "",
  glowColors = "from-[#FFD900]/30 via-[#01236A]/25 to-[#FFD900]/20",
  primaryDotColor = "fill-[#FFD900]/50",
  secondaryDotColor = "fill-[#01236A]/40",
  customGrid = { rows: 6, cols: 6 },
  roundedClass = "rounded-2xl sm:rounded-3xl",
  imageHeightClass = "h-[420px] sm:h-[500px] lg:h-[560px] xl:h-[600px]",
  children,
  onIndexChange,
  currentIndex,
}) {
  return (
    <div className={cn("relative w-full", className)}>
      {/* 1. Backing decorative soft ambient glow */}
      <div
        className={cn(
          "absolute -inset-3 sm:-inset-5 bg-gradient-to-tr rounded-3xl blur-2xl opacity-60 -z-10",
          glowColors
        )}
      />

      {/* 2. Top-Right decorative dot pattern */}
      <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-44 sm:w-56 h-44 sm:h-56 -z-10 pointer-events-none">
        <DotPattern className={primaryDotColor} />
      </div>

      {/* 3. Bottom-Left decorative dot pattern */}
      <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-44 sm:w-56 h-44 sm:h-56 -z-10 pointer-events-none">
        <DotPattern className={secondaryDotColor} />
      </div>

      {/* 4. Main Image Container - Clean, simple, perfect rounded shape */}
      <div
        className={cn(
          "relative w-full overflow-hidden shadow-2xl shadow-[#01236A]/25 border-2 border-[#FFD900]/40 bg-[#001747] group",
          roundedClass
        )}
      >
        <PixelImage
          srcs={images}
          className={cn("w-full", imageHeightClass)}
          customGrid={customGrid}
          grayscaleAnimation={false}
          alt={alt}
          onIndexChange={onIndexChange}
          currentIndex={currentIndex}
        />

        {/* Subtle dark gradient overlay at the base for badge readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent pointer-events-none z-20" />

        {/* Optional overlay children (e.g. caption badges, indicators) */}
        {children && (
          <div className="absolute inset-0 z-30 pointer-events-none">{children}</div>
        )}
      </div>
    </div>
  );
}

export default ArchedHeroImage;
