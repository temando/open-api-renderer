const appConfig = require('./webpack.config.app')

module.exports = Object.assign({}, appConfig, {
  entry: {
    demo: ['babel-polyfill', 'core-js/es7', './entries/demo/index.js']
  },

  output: {
    path: `${__dirname}/dist/demo`,
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  }
})
