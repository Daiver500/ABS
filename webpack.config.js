const path = require("path");
const miniCss = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  watch: true,
  entry: [
    "./source/js/index.js",
    "./source/js/modal.js",
    "./source/js/menu.js",
    "./source/js/offers.js",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  module: {
    rules: [
        // JavaScript
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
    ],
},
module: {
  rules: [
      // CSS, PostCSS, Sass
      {
          test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
  ],
},
  plugins: [
    new miniCss({
      filename: "style.css",
    }),
   ],
  devtool: false,
};
