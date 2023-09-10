import type { Config } from "tailwindcss";
import tailwindPreset from "./src/tailwind/preset";

export default {
  content: [
    ".storybook/Decorator.tsx",
    "./src/**/*.tsx",
    "./src/**/*.mdx",
    ...tailwindPreset.content,
  ],
  presets: [tailwindPreset],
} satisfies Config;
