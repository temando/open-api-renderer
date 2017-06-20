const baseConfig = require('./webpack.config')

module.exports = Object.assign({}, baseConfig, {
  entry: {
    demo: ['./entries/demo/index.js']
  },

  output: {
    path: `${__dirname}/docs/demo`,
    filename: '[name].[chunkhash].js'
  }
})
