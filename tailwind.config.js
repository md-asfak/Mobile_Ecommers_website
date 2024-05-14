/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color_1: "#230056",
        color_2: "#491077",
        blue: "#126dfe",
        yellow: "#fec200",
        white: "#ffffff",
        black: "#000000",
        red: "#db020b",
      },
      screens: {
        xs: "520px",
      },
    },
  },
  plugins: [],
};
