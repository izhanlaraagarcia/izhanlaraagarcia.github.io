import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Asegúrate de que este valor esté ajustado correctamente.
  assetsInclude: ['**/*.jpeg', '**/*.JPEG'],
})
