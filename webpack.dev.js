const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path');
const webpack = require('webpack')

module.exports = merge(base, {
  mode: "development",
  devtool: 'eval-source-map', 
  devServer:{
    contentBase: path.join(__dirname, 'dist/'),
    hot: true,
    port: 9000,
    historyApiFallback: true, //http://blog.codingplayboy.com/2017/12/26/react-router-browserhistory-404/
    proxy: {
      '/': {
        bypass: function (req, res, proxyOptions) {
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.');
            return `/index.html`;
          }
        }
      }
     }
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ],
})