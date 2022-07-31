const config = require("@tadasana/tailwind-config/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
};
