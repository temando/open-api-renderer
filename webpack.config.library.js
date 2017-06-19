const baseConfig = require('./webpack.config')
const pkgJson = require('./package.json')

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

  externals: Object.keys(pkgJson.dependencies),

  plugins: [
    baseConfig.plugins[0]
  ]
})
