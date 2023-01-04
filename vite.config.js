import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: false,
  },
  root: "./",
  build: {
    outDir: "dist",
    emptyOutDir: false,
  },
});
