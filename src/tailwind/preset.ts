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
    },
  },
} satisfies Config;
