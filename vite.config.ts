import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})












=======
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
>>>>>>> 151bc1bbd724e0a783aa25f114eb68ec0b0511d8
