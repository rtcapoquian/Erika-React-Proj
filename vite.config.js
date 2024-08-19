import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all IP addresses, allowing access from other devices
    port: 3000,      // Port you want to use, change it if necessary
  },
})
