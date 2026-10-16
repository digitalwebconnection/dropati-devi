import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { appConfig } from "@/config";

/**
 * Initializes and manages AOS (Animate On Scroll) lifecycle.
 *
 * @param {Object} [options] - Optional custom AOS configuration
 */
export function useAos(options = {}) {
  useEffect(() => {
    AOS.init({
      ...appConfig.aosDefaults,
      ...options,
    });
    AOS.refreshHard();

    // Recalculate once full window assets (images, stylesheets) load
    const handleLoad = () => {
      AOS.refreshHard();
    };
    window.addEventListener("load", handleLoad);

    // Recalculate once web fonts finish loading (prevents font layout shifts from breaking offsets)
    if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        AOS.refresh();
      });
    }

    // Debounced layout listener to track lazy-loaded Suspense sections mounting
    let resizeTimer;
    const debouncedRefresh = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        AOS.refresh();
      }, 80);
    };

    window.addEventListener("resize", debouncedRefresh, { passive: true });
    window.addEventListener("orientationchange", debouncedRefresh, { passive: true });

    let resizeObserver = null;
    if (typeof ResizeObserver !== "undefined" && document.body) {
      resizeObserver = new ResizeObserver(debouncedRefresh);
      resizeObserver.observe(document.body);
    }

    // Progressive staggered refreshes to capture hydrating chunks and lazy sections
    const timers = [
      setTimeout(() => AOS.refresh(), 100),
      setTimeout(() => AOS.refresh(), 350),
      setTimeout(() => AOS.refreshHard(), 800),
      setTimeout(() => AOS.refreshHard(), 2000),
    ];

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", debouncedRefresh);
      window.removeEventListener("orientationchange", debouncedRefresh);
      clearTimeout(resizeTimer);
      timers.forEach(clearTimeout);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  const refreshAos = () => {
    AOS.refresh();
  };

  return { refreshAos };
}

export default useAos;
