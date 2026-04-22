import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/",
  build: {
    outDir: "build",
    sourcemap: true,
    chunkSizeWarningLimit: 2000,
  },
  plugins: [tsconfigPaths(), react()],
  server: {
    port: 4028,
    host: "0.0.0.0",
    strictPort: true,
  },
  preview: {
    port: 4028,
    host: "0.0.0.0",
  },
});
