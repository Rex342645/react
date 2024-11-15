import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react/05passwordgenerator/',
  build: {
    outDir: 'dist', // Output directory after building
    sourcemap: true, // Optional: generate sourcemaps for debugging
  },
})
