import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.jpeg', '**/*.JPEG'],
  build: {
    rollupOptions: {
      // Asegúrate de que las dependencias se resuelvan externamente si es necesario
      external: ['react-router-dom'],
    },
  },
});
