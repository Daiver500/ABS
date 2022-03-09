const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ["./source/js/app.js"],
  output: {
    filename: "bundle.js",
    path: __dirname,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'source'),
    },
    liveReload: true,
    open: true,
    hot: true,
  },
  mode: 'none',
  watch: true,
  module: {
    rules: [
      {
        test: /\.(scss)$/,

        use: [
          {loader: MiniCssExtractPlugin.loader},
          "css-loader",
          "sass-loader",
        ],
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
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  }
};
