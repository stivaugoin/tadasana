import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "Tadasana",
      fileName: (format) => `tadasana.${format}.js`,
    },
  },

  plugins: [react()],
});
