import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Set base for GitHub Pages project site so assets resolve at /dhanush_ishwar/
  base: '/dhanush_ishwar/',
  plugins: [react()],
})
