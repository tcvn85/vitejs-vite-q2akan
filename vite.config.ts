/// <reference types="vite/client" />
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
// ignored next line

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["@vanilla-extract/babel-plugin"],
      },
    }),
    vanillaExtractPlugin(),
  ],
  css: {
    postcss: "./postcss.config.js",
    preprocessorOptions: {
      css: {
        inject: true,
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});
