import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> parent of d882257 (fix:충돌 마커 제거)
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
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
<<<<<<< HEAD
=======












=======
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
>>>>>>> 151bc1bbd724e0a783aa25f114eb68ec0b0511d8
>>>>>>> parent of d882257 (fix:충돌 마커 제거)
