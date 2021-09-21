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
    },
    screens: {
      tablet: "640px",
      desktop: "1024px",
      "hover-hover": { raw: "(hover: hover)" },
    },
  },
  variants: {},
};
