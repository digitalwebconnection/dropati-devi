/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#2c221e",
        muted: "#75665e",
        terracotta: {
          DEFAULT: "#9a3b26",
          dark: "#712c20",
        },
        gold: "#e5a93b",
        bone: "#fdfbf7",
        sand: "#f4efe6",
        line: "#dfd5c9",
        closing: "#38231d",
        footer: "#241712",
        involved: "#e3c5a4",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
