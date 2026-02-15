/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./modules/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mafad-navy": "#0A2E4D",
        "mafad-cyan": "#07E9E9",
        "mafad-orange": "#E67E22",
        "mafad-gold": "#F39C12",
        "mafad-gray": "#F8FAFC",
        "mafad-dark": "#1E293B",
        primary: "#0A2E4D",
        secondary: "#07E9E9",
        accent: "#E67E22",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-down": "slideDown 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
