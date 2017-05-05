var webpack = require('webpack');
var path = require("path");
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = require('./webpack.config.js');
const prodConfig = Object.create(baseConfig);

prodConfig.entry = [
    'regenerator-runtime/runtime',
    './src/index.js'
];

prodConfig.devServer = {};
prodConfig.plugins = [
  new ExtractTextPlugin('css/style.workaday.css'),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
      warnings: false
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    },
    '__API__': JSON.stringify('http://localhost:9000'),
    'app.storage': {
      'USER_TOKEN': JSON.stringify('userToken')
    }
  })                      
] 

module.exports = prodConfig;