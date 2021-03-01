const path = require('path')
const { InjectManifest } = require('workbox-webpack-plugin')

const workboxInject = new InjectManifest({
  swSrc: './src/sw.js',
  swDest: 'sw.js'
})

const config = {
  configureWebpack: {
    resolve: {
      alias: {
        '@tests': path.join(__dirname, 'tests/')
      }
    },
    plugins: [
      workboxInject
    ]
  }
}

module.exports = config
