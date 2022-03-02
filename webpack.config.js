const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ["./source/js/app.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [ MiniCssExtractPlugin.loader,'css-loader', {loader: "sass-loader"},
          options: {
          publicPath: "./source/css",
        }],
      },
      { test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.min.css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      path:  __dirname + '/js'
    })
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  }
};
