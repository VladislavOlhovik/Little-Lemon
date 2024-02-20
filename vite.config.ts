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
      components: path.resolve(__dirname, './src/components/'),
      icons: path.resolve(__dirname, './src/icons/'),
      theme: path.resolve(__dirname, './src/theme/'),
      API: path.resolve(__dirname, './src/API/'),
      pages: path.resolve(__dirname, './src/pages/'),
      store: path.resolve(__dirname, './src/store/'),
      utils: path.resolve(__dirname, './src/utils/'),
    },
  },
});
