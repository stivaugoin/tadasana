import type { Config } from "tailwindcss";
import tailwindPreset from "./src/tailwind/preset";

export default {
  content: ["./src/**/*.tsx", "./src/**/*.mdx"],
  presets: [tailwindPreset],
} satisfies Config;
