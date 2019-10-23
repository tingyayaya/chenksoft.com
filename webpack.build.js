const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require('webpack')

module.exports = merge(base, {
  mode: "production",
  devtool: false,
  optimization: {
    splitChunks: {
      chunks: 'async',
      automaticNameDelimiter: '.',
      cacheGroups: {
        vendors: {  // 抽离第三方插件
          test: /[\\/]node_modules[\\/]/,     // 指定是node_modules下的第三方包
          name: "vendors",
          priority: -10                       // 抽取优先级
        }
      }
    },
    runtimeChunk: {   //每个入口命名
      name: entrypoint => `manifest.${entrypoint.name}`
    },
    minimizer: [
      new OptimizeCSSAssetsPlugin(), //优化css为压缩格式,
      new TerserPlugin({
        terserOptions: {
          compress:{
            drop_console:true     //不显示console.log
          }
        }
    }),
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    // new webpack.DefinePlugin({
    //   BASENAME: JSON.stringify('/doc')
    // })
  ]
})