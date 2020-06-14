// THIS IS NOT BEING USED AS OF 06/14/2020
const path = require('path');

module.exports = {
  entry: ['./src/content/main.js'],
  output: {
    filename: 'content.js',
    path: path.join(__dirname, '/built')
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.(js)?$/,
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
