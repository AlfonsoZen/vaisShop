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
    // Esto es CRÍTICO para Oxygen: empaqueta todas las dependencias en el worker
    noExternal: true,
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
    // Optimizamos para el runtime de Oxygen
    assetsInlineLimit: 0,
  }
});
