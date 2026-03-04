import { defineConfig } from 'vite';
import { hydrogen } from '@shopify/hydrogen/vite';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    hydrogen(),
    reactRouter(),
    {
      name: 'fix-node-imports',
      enforce: 'pre',
      transform(code, id) {
        if (id.includes('fflate') || id.includes('three-stdlib')) {
          return code
            .replace(/import\s*{\s*createRequire\s*}\s*from\s*['"]module['"]\s*;?/g, 'const createRequire = (path) => (req) => ({});')
            .replace(/import\s*['"]module['"]\s*;?/g, '');
        }
      }
    }
  ],
  ssr: {
    noExternal: true,
    target: 'webworker',
  },
  resolve: {
    conditions: ['worker', 'browser', 'import', 'module', 'default'],
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  build: {
    assetsInlineLimit: 0,
    ssrEmitAssets: true,
  }
});
