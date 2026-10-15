import { useEffect, useRef } from "react";

/**
 * Hook to listen for keyboard events on window.
 *
 * @param {string|string[]} keys - Key or array of keys to listen for (e.g. "Escape", ["ArrowLeft", "ArrowRight"])
 * @param {(e: KeyboardEvent) => void} handler - Callback invoked when the key is pressed
 * @param {boolean} [isActive=true] - Whether the listener is currently active
 */
export function useKeydown(keys, handler, isActive = true) {
  const handlerRef = useRef(handler);
  const keysRef = useRef(keys);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    keysRef.current = keys;
  });

  const keysKey = Array.isArray(keys) ? keys.join("|") : String(keys);

  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e) => {
      const currentKeys = keysRef.current;
      const match = Array.isArray(currentKeys)
        ? currentKeys.includes(e.key)
        : e.key === currentKeys;

      if (match && handlerRef.current) {
        handlerRef.current(e);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keysKey, isActive]);
}

export default useKeydown;
