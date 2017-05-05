var webpack = require('webpack');
var path = require("path");

module.exports = {
  entry: [
      'regenerator-runtime/runtime',
      './test/index.js'
  ],
  target: 'node', // run tests on node
  module: {
    preLoaders: [
      {  
        test: /\.json$/,
        loader: 'json' // read *.json files properly when it is used as entry file
      }
    ],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
      test: /\.(css|scss|sass)$/,
      loader: 'null' // Do not generate stylesheet files during tests
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
    extensions: ['', '.js']
  },
  output: {
    path: path.resolve(__dirname, "test/tmp"),
    filename: 'testBundle.js'
  },
   plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('test')
      },
      '__API__': JSON.stringify('http://localhost:9000'),
      'app.storage': {
        'USER_TOKEN': JSON.stringify('userToken_test')
      }
    })                      
  ]
  
  
};

