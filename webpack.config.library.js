const baseConfig = require('./webpack.config')

module.exports = Object.assign({}, baseConfig, {
  entry: {
    OpenApiRenderer: ['babel-polyfill', 'core-js/es7', './entries/OpenApiRenderer.js']
  },

  output: {
    path: `${__dirname}/dist/library`,
    publicPath: '/',
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    library: '[name]'
  },

  externals: [
    'react',
    'react-dom'
  ],

  plugins: [
    baseConfig.plugins[0]
  ]
})
