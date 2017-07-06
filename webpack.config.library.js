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
    react: 'React',
    'react-dom': 'ReactDOM',
    'prop-types': true
  },

  plugins: []
})
