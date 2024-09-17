import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // Ensure this matches with vercel.json
  },
  base: '/',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Replace with your backend URL and port
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: rewrites URL
      },
    },
  },
})



