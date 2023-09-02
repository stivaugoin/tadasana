import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./node_modules/tadasana/src/components/*.tsx"],
  theme: {
    colors: {
      primary: colors.cyan,
    },
  },
} satisfies Config;
