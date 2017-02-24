var webpack = require('webpack');
var isProd = JSON.parse(process.env.PROD_ENV || '0'); // `PROD_ENV=1 webpack`
var analyze = JSON.parse(process.env.ANALYZE || '0');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: "./client/app/app.module.ts"
  },
  output: {
    path: __dirname + "/client/dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: "source-map-loader"
      },
    ]
  },
  devtool: 'inline-source-map',
  plugins: isProd ? [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    analyze ? new BundleAnalyzerPlugin() : function(){},
    analyze ? new OpenBrowserPlugin({url: '127.0.0.1:8888'}) : function(){}
  ] : [
    // DEV PLUGINS
    analyze ? new BundleAnalyzerPlugin() : function(){},
    analyze ? new OpenBrowserPlugin({url: '127.0.0.1:8888'}) : function(){}
  ],
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
