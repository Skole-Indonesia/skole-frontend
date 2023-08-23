// Default
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@Pages": path.resolve(__dirname, "src/Pages"),
      "@Layouts": path.resolve(__dirname, "src/Layouts"),
      "@Components": path.resolve(__dirname, "src/Components"),
      "@Assets": path.resolve(__dirname, "src/Assets"),
    },
  },
});
