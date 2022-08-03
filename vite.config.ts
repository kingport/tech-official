import { defineConfig } from 'vite'
// import WindiCSS from 'vite-plugin-windicss'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // WindiCSS(),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://106.13.197.84:8082",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // base: '/tech-official/'
})
