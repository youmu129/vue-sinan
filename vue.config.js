// vue.config.js
module.exports = {
  devServer: {
    port: 8000,
    proxy: {
      '/index': {
        target: 'http://localhost:8080', 
        ws: true, 
        changeOrigin:true
      }
    }
  }
}