const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src/client/index.js'),
  output: {
    filename: 'bundle.js', // 打包生成文件
    path: path.join(__dirname, 'dist'),
    publicPath: '/public/', // 打包之后的index文件引入的时候会添加/public前缀
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
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, 'src/client/index.html'),
    }),
  ],
  devServer: {
    port: '3001',
  },
  mode: 'development',
}
