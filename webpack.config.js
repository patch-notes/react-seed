var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: './main.js',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?camelCase&modules&importLoaders=1&' +
          'localIdentName=[hash:base64:5]',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?camelCase&modules&importLoaders=1&' +
          'localIdentName=[hash:base64:5]',
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'index.html' },
    ])
  ]
}
