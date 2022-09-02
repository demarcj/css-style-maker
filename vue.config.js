const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://demarcj.github.io/css-style-maker'
    : '/',
    configureWebpack: {
      resolve: {
        alias: {
          src: path.resolve(__dirname, 'src')
        }
      },
    }
});
