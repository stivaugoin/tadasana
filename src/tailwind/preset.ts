const colors = require("tailwindcss/colors");

module.exports = {
  plugins: [require("@tailwindcss/forms")],
  theme: {
    colors: {
      current: "currentColor",
      danger: colors.red,
      gray: colors.blueGray,
      primary: colors.sky,
      success: colors.green,
      transparent: "transparent",
      warning: colors.amber,
      white: colors.white,
    },
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
    },
    screens: {
      tablet: "640px",
      desktop: "1024px",
      "hover-hover": { raw: "(hover: hover)" },
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"],
      opacity: ["disabled"],
    },
  },
};
