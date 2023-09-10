import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./node_modules/tadasana/src/components/**/*.tsx"],
  theme: {
    colors: {
      primary: colors.sky,
      secondary: colors.orange,
      default: colors.slate,
      success: colors.green,
      warning: colors.yellow,
      danger: colors.red,
      white: colors.white,
    },

    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.125rem" }],
      md: ["1rem", { lineHeight: "1.25rem" }],
      lg: ["1.125rem", { lineHeight: "1.5rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { letterSpacing: "-1px", lineHeight: "1.75rm" }],
      "3xl": ["1.75rem", { letterSpacing: "-1px", lineHeight: "2rem" }],
      "4xl": ["2rem", { lineHeight: "2.25rem" }],
    },

    fontWeight: {
      normal: "400",
      semibold: "500",
    },

    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
} satisfies Config;
