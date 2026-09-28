import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/goit-advancedjs-hw-01/',
  define: {
    global: 'window',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gallery: resolve(__dirname, '1-gallery.html'),
        form: resolve(__dirname, '2-form.html'),
      },
    },
  },
});