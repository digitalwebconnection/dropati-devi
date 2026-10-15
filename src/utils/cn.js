import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple CSS class names and resolves Tailwind CSS class conflicts.
 *
 * @param {...(string|undefined|null|boolean|Record<string, boolean>)} inputs - Class names or conditional class objects.
 * @returns {string} - Merged class string.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default cn;
