import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv'

dotenv.config()

const SERVER_PORT = process.env.HUB_SERVER_PORT || "9090" 
const HUB_ALLOWED_HOSTS = process.env.HUB_ALLOWED_HOSTS || "localhost"
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    port: parseInt(SERVER_PORT, 10) || 9092,
    host: true,      // allow access from network (0.0.0.0)
    strictPort: true, // prevents auto-switching if port is busy
    allowedHosts: [HUB_ALLOWED_HOSTS]
  }
})