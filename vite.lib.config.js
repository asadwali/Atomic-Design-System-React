import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const useClientBanner = {
  name: 'use-client-banner',
  generateBundle(_options, bundle) {
    for (const file of Object.values(bundle)) {
      if (file.type === 'chunk') {
        file.code = `"use client";\n${file.code}`;
      }
    }
  }
};

// Library build config: bundles the design system for npm publishing.
// Separate from vite.config.js, which remains the Storybook/demo-app build.
export default defineConfig({
  plugins: [react(), tailwindcss(), useClientBanner],
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src')
    }
  },
  publicDir: false,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(dirname, 'src/index.js'),
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.cjs'),
      cssFileName: 'style'
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        '@heroicons/react/24/solid',
        '@radix-ui/react-avatar',
        '@radix-ui/react-checkbox',
        '@radix-ui/react-dialog',
        '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-label',
        '@radix-ui/react-popover',
        '@radix-ui/react-select',
        '@radix-ui/react-separator',
        '@radix-ui/react-slot',
        '@radix-ui/react-tooltip',
        '@tanstack/react-table',
        'chrono-node',
        'class-variance-authority',
        'clsx',
        'date-fns',
        'date-fns-tz',
        'lucide-react',
        'prop-types',
        'react-day-picker',
        'tailwind-merge'
      ]
    }
  }
});
