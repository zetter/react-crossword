const path = require('path');
const baseConfig = require('./webpack.config');

module.exports = {
  mode: 'development',
  entry: {
    examples: path.join(
      __dirname,
      'examples',
      'exampleCrossword.js',
    ),
  },
  devServer: {
    contentBase: path.join(__dirname, './examples/'),
    port: 3000,
  },
  output: {
    filename: 'examples.js',
    path: path.join(__dirname, 'examples', 'lib'),
  },
  resolve: baseConfig.resolve,
  resolveLoader: baseConfig.resolveLoader,
  module: baseConfig.module,
};
