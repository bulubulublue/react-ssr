const path = require('path');

module.exports = {
  entry: './src/client/client.js', // 也可以叫index.js

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
};
