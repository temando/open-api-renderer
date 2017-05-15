module.exports = () => {
  return {
    devtool: 'source-map',
    devServer: {
      contentBase: `${__dirname}/src`,
      compress: false,
      port: 8200,
      historyApiFallback: true
    },
    output: {
      path: `${__dirname}/src`
    }
  };
};
