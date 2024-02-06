import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      // '@store': `${path.resolve(__dirname, './src/store')}`,
      '@icons': `${path.resolve(__dirname, './src/icons')}`,
      '@components': `${path.resolve(__dirname, './src/components')}`,
      // '@helpers': `${path.resolve(__dirname, './src/helpers')}`,
      // '@styles': `${path.resolve(__dirname, './src/styles')}`,
      '@theme': `${path.resolve(__dirname, './src/theme')}`,
    },
  },
});
