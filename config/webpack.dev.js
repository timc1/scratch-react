const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const webpack = require('webpack')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
  },
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    filename: '[name].bundle.js',
  },
})
