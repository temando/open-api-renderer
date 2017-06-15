const DashboardPlugin = require('webpack-dashboard/plugin')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
const webpackMerge = require('webpack-merge')
const appConfig = require('./webpack.config.app')

console.log('\nwebpack.config.dev\n')

module.exports = webpackMerge(appConfig, {
  plugins: [
    new DashboardPlugin(),
    new WatchMissingNodeModulesPlugin(`${__dirname}/node_modules`)
  ],

  devtool: 'source-map',

  devServer: {
    contentBase: './src',
    compress: false,
    port: 8200,
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 100 },
    stats: { chunkModules: false }
  },

  output: { path: `${__dirname}/src` }
})
