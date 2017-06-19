const baseConfig = require('./webpack.config')

module.exports = Object.assign({}, baseConfig, {
  entry: {
    app: ['core-js/es7', './entries/app.js']
  },

  output: {
    path: `${__dirname}/dist/app`,
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  }
})
