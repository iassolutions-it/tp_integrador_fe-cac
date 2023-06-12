
import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  base: '/tp_integrador_fe-cac/',
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        tickets: resolve(root, 'tickets.html'),
      },
    },
  },
  server: {
    port: 8080,
    hot: true
  }
})