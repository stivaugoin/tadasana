import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const resolvePath = (str: string) => path.resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolvePath("src/index.ts"),
      name: "Tadasana",
      fileName: "tadasana",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },

  plugins: [
    react(),
    dts({
      exclude: ["**/*.stories.tsx"],
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
});
