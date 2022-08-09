import { defineConfig } from 'vite';
// import WindiCSS from 'vite-plugin-windicss'
import react from '@vitejs/plugin-react';
import VitePrettier from 'vite-plugin-prettier';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // WindiCSS(),
    // VitePrettier({
    //   singleQuote: true,// 字符串是否使用单引号
    //   //...更多规则
    // })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://106.13.197.84:8082',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  // base: '/tech-official/'
});
