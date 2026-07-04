import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  // GitHub Pages: VITE_BASE_PATH=/MyPortfolio/  |  Vercel/local: /
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_BASE_PATH || '/';

  return {
    plugins: [react(), tailwindcss()],
    base,
  };
});
