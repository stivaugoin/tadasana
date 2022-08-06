const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  theme: {
    colors: {
      current: "currentColor",
      danger: colors.red,
      gray: colors.gray,
      primary: colors.sky,
      success: colors.green,
      transparent: "transparent",
      warning: colors.amber,
      white: colors.white,
    },
  },
};
