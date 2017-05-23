const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devConfig = require('./webpack.config.dev');
const pkgJson = require('./package.json');

const isProduction = PRODUCTION = process.env.NODE_ENV === 'prod';

const extractSass = new ExtractTextPlugin({
  filename: "bundle.css",
  disable: !isProduction
});

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
    extractSass,
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
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
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
