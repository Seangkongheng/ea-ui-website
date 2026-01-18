/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#bafd00",
      },
      fontFamily: {
        Kantumruy: ["Kantumruy Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
