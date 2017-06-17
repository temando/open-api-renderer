const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkgJson = require('./package.json')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const extractSass = new ExtractTextPlugin({
  filename: 'bundle.css',
  disable: !isProduction
})

module.exports = {
  context: `${__dirname}/src`,
  entry: {
    bundle: ['babel-regenerator-runtime', './index.js'],

    // Everything in the `dependencies` should be considered a `vendor` library
    vendor: Object.keys(pkgJson.dependencies)
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    extractSass,

    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),

    /**
     * This renders out an `./dist/index.html` with all scripts, title etc. attached
     */
    new HtmlWebpackPlugin({
      title: pkgJson.description || pkgJson.name,
      filename: 'index.html',
      template: './index.html'
    }),

    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false
    })
  ],
  resolve: {
    modules: ['src/', 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },
  performance: { hints: false },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      // JS
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },

      // JSON
      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      // SASS/CSS
      {
        test: /\.(css|scss)$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }],
          // use style-loader in development
          fallback: 'style-loader'
        })
      },

      // ASSETS
      {
        test: /\.(ttf|eot|svg|png|gif|jpg|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  }
}
