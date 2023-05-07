const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  base: '/tp_integrador_fe-cac/',
  build: {
    outDir: '../dist',
  },
  server: {
    port: 8080,
    hot: true
  }
}
