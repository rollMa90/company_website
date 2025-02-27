import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: "src/auto-imports.d.ts",
    }),
    Components({
      // resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
  ],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "@/styles/element/index.scss" as *;`,
  //     },
  //   },
  // },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
