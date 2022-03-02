const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ["./source/js/app.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [ MiniCssExtractPlugin.loader,'css-loader', {loader: "sass-loader",},],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.min.css',
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  }
};
