import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base:'./',
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
})
