const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkgJson = require('./package.json')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'prod'

const extractSass = new ExtractTextPlugin({
  filename: 'bundle.css',
  disable: !isProduction
})

module.exports = {
  context: `${__dirname}/src`,
  entry: {
    // TODO: remove babel polyfill, use transforms
    bundle: ['babel-polyfill', 'core-js/es7', './index.js'],

    // Everything in the `dependencies` should be considered a `vendor` library
    vendor: [
      'core-js/es7'
    ].concat(Object.keys(pkgJson.dependencies))
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

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
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
        loader: 'babel-loader',
        exclude: [/node_modules/]
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
