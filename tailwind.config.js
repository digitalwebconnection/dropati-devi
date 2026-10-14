/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#01236A",
          dark: "#001747",
          deep: "#001133",
          light: "#eaf1fc",
        },
        yellow: {
          DEFAULT: "#FFD900",
          light: "#fff6bf",
        },
        primary: "#01236A",
        secondary: "#FFD900",
        gold: "#FFD900",
        terracotta: {
          DEFAULT: "#01236A",
          dark: "#001747",
        },
        ink: "#01236A",
        muted: "#475569",
        bone: "#ffffff",
        sand: "#f8fafc",
        line: "#e2e8f0",
        closing: "#01236A",
        footer: "#001747",
        involved: "#eef4ff",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
