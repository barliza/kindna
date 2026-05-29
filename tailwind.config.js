/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#D4A853",
          "gold-light": "#E8C97A",
          "gold-dark": "#B8862D",
          blue: "#53A8D4",
          bg: "#0D1117",
          "bg-light": "#131920",
          surface: "rgba(255,255,255,0.03)",
          border: "rgba(255,255,255,0.06)",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
