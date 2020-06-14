'use strict';
'use strict';
const { resolve } = require('path');

module.exports = {
  entry: {
    popup:  './src/popup/main',
    content: './src/content/main',
    background: './src/background/index'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: resolve(__dirname, './src'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
};
