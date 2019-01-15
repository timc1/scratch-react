const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'production',
  plugins: [new webpack.HashedModuleIdsPlugin()],
  output: {
    filename: '[name].[contenthash].js',
  },
})
