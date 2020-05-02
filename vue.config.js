// vue.config.js
module.exports = {
  devServer: {
    port: 8000,
    proxy: {
      '/bookmark': {
        target: 'http://localhost:8080', 
        ws: true, 
        changeOrigin:true
      }
    }
  }
}