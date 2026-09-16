import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // Allow the dev server to be accessed from Chrome/Edge at localhost
    host: true,
    port: 5173,
    open: false,
  },
  optimizeDeps: {
    // Ensure ogl (WebGL library) is pre-bundled so it works in all browsers
    include: ['ogl'],
  },
})
