import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({

  base: '/euro_trip_2025/',
  plugins: [react()],
  test: {
    environment: 'jsdom'
  }
  
});
