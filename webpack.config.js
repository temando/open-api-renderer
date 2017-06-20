const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkgJson = require('./package.json')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const extractSass = new ExtractTextPlugin({
  filename: 'styles.css',
  disable: !isProduction
})

module.exports = {
  context: `${__dirname}/src`,

  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },

  plugins: [
    extractSass,

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (m) => m.context && m.context.indexOf('node_modules') !== -1
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
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

    // new webpack.optimize.ModuleConcatenationPlugin()
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
          options: { cacheDirectory: true }
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
        loaders: [
          { loader: 'url-loader', options: { limit: 8192 } }
        ]
      }
    ]
  }
}
