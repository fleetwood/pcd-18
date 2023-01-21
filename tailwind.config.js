/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "luxury",
      "aqua",
      "coffee",
      "cupcake",
      "cyberpunk",
      "dark",
      "dracula",
      "light",
      "retro",
      "winter",
    ],
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
