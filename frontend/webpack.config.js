var webpack = require('webpack');
var path = require("path");
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
      'webpack-dev-server/client?http://localhost:8070', // Setting the URL for the hot reload
      'webpack/hot/only-dev-server', // Reload only the dev server
      'regenerator-runtime/runtime',
      './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css-loader?sourceMap')
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
    },
    // Image URL config. Generate data URI's for images smaller than 10,000 bytes
    {
      test: /\.(png|gif|jpe?g|svg)$/, 
      loader: 'url-loader?name=images/[name].[ext]&limit=10000'
    },
    {
      test: /\.(png|gif|jpe?g|svg)$/i,
      loader: 'file-loader?hash=sha512&digest=hex&name=images/[name].[ext]'
    },
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
      loader: 'url-loader?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff' 
    },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
      loader: 'file-loader?name=fonts/[name].[ext]' 
    }]
  },
  resolve: {
    extensions: ['', '.js'],
    root: path.resolve(__dirname),
    alias: {
      appServices: 'src/common/services',
      appHelpers: 'src/common/helpers',
      appComponents: 'src/common/components',
      appReducer: 'src/common/app.reducer',
      appStyle: 'src/sass/index.scss',
      appMsgs: 'src/common/messages',
      appCrud: 'src/common/crud'

    }
  },
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    publicPath: '/assets/', // It will serve the resources (entries) from public path (Relative to your server)
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist', // Path that will be served with resources
    hot: true, // Turn on hot reloading
    historyApiFallback: true,
    port: 8070
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Wire in the hot loading plugin
    new ExtractTextPlugin('css/style.fixauditoria.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      },
      '__API_READ__': JSON.stringify('http://localhost:8081'),
      '__API_WRITE__': JSON.stringify('http://localhost:8080'),
      'app.storage': {
        'USER_TOKEN': JSON.stringify('userToken'),
        'USER_ID': JSON.stringify('userId')
      }
    })                      
  ]
};
