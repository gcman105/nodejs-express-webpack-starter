var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  entry: SRC_DIR + "/js/app.js",
  output: {
    path: DIST_DIR,
    filename: "bundle.js"
  },
  target: "node-webkit",
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: [
          SRC_DIR + "/js"
        ],
        loader: "babel-loader",
        query: {
          presets: ["es2015", "stage-2"],
          compact: false
        }
      },
      {
        test: /\.pug$/,
        include: [
          SRC_DIR + "/views"
        ],
        loader: "pug-loader"
      },
      {
        test: /\.scss$/,
        include: [
          SRC_DIR + "/sass"
        ],
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: SRC_DIR + "/views/index.pug"
    })
  ],
  stats: {
    colors: true
  },
  node: {
    console: true
  },
  devtool: "source-map"
};

module.exports = config;