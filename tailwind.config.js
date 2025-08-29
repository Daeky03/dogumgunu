/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#0b1120",
        candle: {
          flame: "#ffb703",
          glow: "#fb8500",
          base: "#ffd166",
        },
        cake: {
          cream: "#fff0d9",
          chocolate: "#5d3a00",
          strawberry: "#e63946",
        },
        smoke: {
          light: "#e0e0e0",
          dark: "#9e9e9e",
        },
      },
      keyframes: {
        flameFlicker: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
          "25%": { transform: "scale(1.05) rotate(-2deg)", opacity: "0.95" },
          "50%": { transform: "scale(0.95) rotate(2deg)", opacity: "1" },
          "75%": { transform: "scale(1.1) rotate(-1deg)", opacity: "0.9" },
        },
        smokeRise: {
          "0%": { opacity: "0", transform: "translateY(0) scale(0.5)" },
          "20%": { opacity: "0.6" },
          "100%": {
            opacity: "0",
            transform: "translateY(-100px) scale(1.5) translateX(20px)",
          },
        },
        windBlow: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "50%": { opacity: "0.5", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(80px)" },
        },
      },
      animation: {
        flame: "flameFlicker 1.5s infinite ease-in-out",
        smoke: "smokeRise 3s forwards",
        wind: "windBlow 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
