import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})
<<<<<<< HEAD
=======












>>>>>>> c234505f1f108c392f5edbc854167515cf6c298d
