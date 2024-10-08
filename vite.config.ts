import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [sveltekit()],
  define: {
    __PROJECT_PATH__: JSON.stringify(path.resolve(process.cwd()) + path.sep),
  },
});
