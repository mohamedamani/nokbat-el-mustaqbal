import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { enhancedPWAConfig } from './src/config/pwa.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    enhancedPWAConfig
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})