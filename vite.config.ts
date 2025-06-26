import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://vxrachit-tunnel.pages.dev/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
