import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/g12www-adulting/',
  plugins: [react()],
});
