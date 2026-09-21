import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
            // Tells Vite's file watcher to completely ignore Visual Studio's hidden data folder
            ignored: ['**/.vs/**']
        }
    }
})
