import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const base = process.env.GH_PAGES_BASE || '/'; // set GH_PAGES_BASE='/REPO_NAME/' when deploying to gh-pages

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:4000',
      '/ws': {
        target: 'ws://localhost:4000',
        ws: true
      }
    }
  }
});
