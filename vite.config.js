import { defineConfig } from 'vite';

export default defineConfig({
  base: '/sovcom/',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
