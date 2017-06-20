const appConfig = require('./webpack.config.app')

module.exports = Object.assign({}, appConfig, {
  entry: {
    demo: ['./entries/demo/index.js']
  },

  output: {
    path: `${__dirname}/docs/demo`,
    filename: '[name].[chunkhash].js'
  }
})
