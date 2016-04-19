'use strict'; 

var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var env = process.env.NODE_ENV;

var config = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.json?$/, loader: 'json' },
      { test: /\.css$/, loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]' },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.gif$/, loader: "url-loader?mimetype=image/png" }, 
      { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff" }, 
      { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file-loader?name=[name].[ext]" }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
};

if(env === 'build'){
  config.output = {
    library: 'ReactReduxAutoboundInputs',
    libraryTarget: 'umd'
  }
} else if(env === 'development'){
  config.devtool = 'eval-source-map';

  config.entry = [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'src/dev.js')
  ];

  config.output = {
    path: path.join(__dirname, '/dist/'),
    filename: 'react-redux-autobound-inputs.js',
    publicPath: '/'
  };

  config.plugins = config.plugins.concat([
    new HtmlWebpackPlugin({
      template: 'index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]);
} else if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        warnings: false
      }
    })
  )
}

module.exports = config
