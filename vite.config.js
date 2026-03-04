import { defineConfig } from 'vite';
import { hydrogen } from '@shopify/hydrogen/vite';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    hydrogen(),
    reactRouter(),
  ],
  ssr: {
    noExternal: true,
    target: 'webworker',
  },
  resolve: {
    alias: {
      // Evita que dependencias intenten cargar módulos de Node en Oxygen
      'module': 'identity-obj-proxy',
      'fs': 'identity-obj-proxy',
      'path': 'identity-obj-proxy',
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  optimizeDeps: {
    include: ['@react-three/fiber', 'three', 'lucide-react'],
  },
  build: {
    assetsInlineLimit: 0,
  }
});
