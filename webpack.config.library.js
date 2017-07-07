const webpack = require('webpack')
const baseConfig = require('./webpack.config')

module.exports = Object.assign({}, baseConfig, {
  entry: {
    Lincoln: ['./entries/Lincoln.js']
  },

  output: {
    path: `${__dirname}/dist/library`,
    publicPath: '/',
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    library: '[name]'
  },

  externals: {
    react: true,
    'react-dom': true,
    'prop-types': true
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),

    new webpack.optimize.UglifyJsPlugin()
  ]
})
