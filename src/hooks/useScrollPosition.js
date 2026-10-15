import { useState, useEffect } from "react";

/**
 * Hook to track window scroll position and threshold state.
 *
 * @param {number} threshold - Scroll Y threshold in pixels to trigger boolean state (default: 20)
 * @returns {{ scrolled: boolean, scrollY: number }}
 */
export function useScrollPosition(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(currentY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { scrolled, scrollY };
}

export default useScrollPosition;
