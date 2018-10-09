const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBase64GeneratedScriptPlugin = require('./webpack-base64-generated-script-plugin');

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.ejs',
      inject: false
    }),
    new WebpackBase64GeneratedScriptPlugin({
      assetName: 'bundle.js',
      placeholder: '--bundle-script-placeholder--'
    })
  ]
};
