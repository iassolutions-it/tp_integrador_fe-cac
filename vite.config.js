const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    base: '/tp_integrador_fe-cac/',
  },
  server: {
    port: 8080,
    hot: true
  }
}
