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
    AOS.refresh();

    return () => {
      // AOS does not have a formal destroy method, but refresh resets states safely
    };
  }, [options]);

  const refreshAos = () => {
    AOS.refresh();
  };

  return { refreshAos };
}

export default useAos;
