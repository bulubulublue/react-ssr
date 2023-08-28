const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  entry: './src/client/client.js', // 也可以叫index.js

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  mode: 'development',
};

module.exports = merge(baseConfig, config);
