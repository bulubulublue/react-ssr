const path = require('path')

module.exports = {
  target: 'node', // 如果不加这个配置，则无法正确使用renderToString
  entry: path.join(__dirname, 'src/client/ServerApp.js'),
  output: {
    filename: 'ServerApp.js', // 打包生成文件
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs2', // 如果不加这个配置，则无法正确使用renderToString
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
}
