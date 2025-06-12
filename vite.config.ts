import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import sass from 'sass';

// https://vite.dev/config/
export default defineConfig({
    server: { port: 80 },
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
            },
        },
    },
})
