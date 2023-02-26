import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/watchList/index.html"),
        movieList: resolve(__dirname, "src/genre-listing/index.html"),
      },
    },
  },
});
