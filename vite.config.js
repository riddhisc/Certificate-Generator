import { defineConfig } from 'vite'; 
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/Certificate-Generator/', // GitHub Pages deployment base path
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Map `@/` to the `src` directory
    },
  },
});