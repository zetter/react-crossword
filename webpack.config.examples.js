const path = require('path');
const webpack = require('webpack');

module.exports = [
  {
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
    resolve: {
      modules: [
        path.join(__dirname, 'src', 'javascripts'),
        path.join(__dirname, 'src', 'stylesheets'),
        'node_modules', // default location, but we're overiding above, so it needs to be explicit
      ],
      alias: {
        svgs: path.join(__dirname, 'src', 'svgs'),
      },
    },
    resolveLoader: {
      modules: [
        'node_modules',
      ],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          loader: 'svg-inline-loader',
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader', // creates style nodes from JS strings
            'css-loader', // translates CSS into CommonJS
            'sass-loader', // compiles Sass to CSS, using Node Sass by default
          ],
        },
      ],
    },
  },
];
