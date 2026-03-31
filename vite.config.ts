import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/art-tps/",
  plugins: [react()],
  define: {
    global: "globalThis",
  },
});
