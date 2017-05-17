const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devConfig = require('./webpack.config.dev');
const pkgJson = require('./package.json');

const isProduction = PRODUCTION = process.env.NODE_ENV === 'prod';

let webpackConfig = {
  context: `${__dirname}/src`,
  entry: {
    bundle: [
      './index.js'
    ],

    // Everything in the `dependencies` should be considered a `vendor` library
    vendor: [].concat(Object.keys(pkgJson.dependencies))
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },

  resolve: {
    modules: ['src/', 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    /**
     * This renders out an `./dist/index.html` with all scripts, title etc. attached
     */
    new HtmlWebpackPlugin({
      title: pkgJson.description || pkgJson.name,
      filename: 'index.html',
      template: './index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader', options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-loader', options: {
              sourceMap: true
            }
          }],
          allChunks: true
        })
      },
      {
        test: /\.(ttf|eot|svg|png|gif|jpg|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  node: {
    fs: 'empty'
  }
};

if (!isProduction) {
  webpackConfig = webpackMerge(webpackConfig, devConfig());
}

module.exports = () => {
  return webpackConfig;
};
