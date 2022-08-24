import { defineConfig } from 'vite';
// import WindiCSS from 'vite-plugin-windicss'
import react from '@vitejs/plugin-react';
import path from 'path';
import VitePrettier from 'vite-plugin-prettier';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // WindiCSS(),
    // VitePrettier({
    //   singleQuote: true,// 字符串是否使用单引号
    //   //...更多规则
    // })
    createSvgIconsPlugin({
      iconDirs: [path.join(__dirname, 'src/assets/icons')]
    })
  ],
  server: {
    proxy: {
      '/api': {
        // target: 'http://106.13.197.84:8082',
        target: 'https://www.keeplive.xyz',        
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  // base: '/tech-official/'
});
