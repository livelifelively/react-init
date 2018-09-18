const merge = require('webpack-merge');
const {resolve} = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const commonConfig = require('./common.config');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'js/bundle.min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ],
});
