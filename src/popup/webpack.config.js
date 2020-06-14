// THIS IS NOT BEING USED AS OF 06/14/2020
const path = require('path');

module.exports = {
  entry: ['./src/popup/main.js'],
  output: {
    filename: 'popup.js',
    path: path.join(__dirname, '/built'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json'],
    modules: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
