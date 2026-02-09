import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    // Add this section:
    server: {
      deps: {
        inline: [/@mui\/x-data-grid/], // Forces Vitest to process MUI Data Grid
      },
    },
  },
  resolve: {
    alias: {
      '.css': 'identity-obj-proxy',
    }
  }
})
