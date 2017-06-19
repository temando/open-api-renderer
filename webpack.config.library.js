const baseConfig = require('./webpack.config')
const pkgJson = require('./package.json')

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

  externals: Object.keys(pkgJson.dependencies),

  plugins: [
    baseConfig.plugins[0]
  ]
})
