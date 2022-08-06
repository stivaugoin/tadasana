const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/core/src/**/*.{ts,tsx}",
  ],
  presets: [require("@tadasana/tailwind-config")],
  theme: {
    colors: {
      primary: colors.purple,
    },
  },
};
