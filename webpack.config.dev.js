const DashboardPlugin = require('webpack-dashboard/plugin')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config')

module.exports = webpackMerge(baseConfig, {
  entry: {
    demo: ['./entries/demo/index.js']
  },

  output: { path: `${__dirname}/src/entries` },

  devtool: 'source-map',

  devServer: {
    contentBase: './src',
    compress: false,
    port: 8200,
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 100 },
    stats: { chunkModules: false }
  },

  plugins: [
    new DashboardPlugin(),

    new WatchMissingNodeModulesPlugin(`${__dirname}/node_modules`)
  ]
})
