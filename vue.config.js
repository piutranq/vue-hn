const path = require('path')

const config = {
  configureWebpack: {
    resolve: {
      alias: {
        '@tests': path.join(__dirname, 'tests/')
      }
    }
  }
}

module.exports = config
