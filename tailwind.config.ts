import type { Config } from "tailwindcss";
import tailwindPreset from "./src/tailwind/preset";

export default {
  content: ["./src/**/*.tsx"],
  presets: [tailwindPreset],
} satisfies Config;
