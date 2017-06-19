const devConfig = require('./webpack.config.dev')

module.exports = Object.assign({}, devConfig, {
  entry: {
    demo: ['babel-polyfill', 'core-js/es7', './entries/demo/index.js']
  },

  output: {
    path: `${__dirname}/dist/demo`,
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  }
})
