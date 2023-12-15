const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Replace with your backend domain
        //target: 'https://oyster-app-zot66.ondigitalocean.app',
        changeOrigin: true,
        ws: true,
        //pathRewrite: {
          //'^/api': '',
        //},
      },
    },
    port: 3000,
  },
})
