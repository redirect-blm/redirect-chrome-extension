'user strict';
const { resolve } = require('path');

let entry;
let output;
if (process.env.NODE_ENV === `production`) {
  console.log('building for production')
  entry = {
    popup:  './src/popup/main',
    content: './src/content/main',
    background: './src/background/index'
  }
  output = {
    path: __dirname + '/dist',
    filename: '[name].js'
  }
} else {
  console.log('building for development');
  entry = {
    popup: './src/popup/dev'
  }
  output = {
    path: __dirname + '/dev',
    filename: '[name].js'
  }
}

module.exports = {
  entry,
  output,
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