const baseConfig = require('./webpack.config')

module.exports = Object.assign({}, baseConfig, {
  entry: {
    app: ['./entries/app.js']
  },

  output: {
    path: `${__dirname}/dist/app`,
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  }
})
