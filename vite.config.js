import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  // base './' — относительные пути.
  // Работает и на GitHub Pages (любой репозиторий),
  // и на своём домене, и в подпапке.
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});