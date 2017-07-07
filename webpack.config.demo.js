const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config')

module.exports = webpackMerge(baseConfig, {
  entry: {
    demo: ['./entries/demo/index.js']
  },

  output: {
    path: `${__dirname}/docs/demo`,
    filename: '[name].[chunkhash].js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
})
