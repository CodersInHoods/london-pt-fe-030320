const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const appDirectory = fs.realpathSync(process.cwd());

const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  entry: resolveAppPath("src"),
  output: {
    filename: "static/js/bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveAppPath("public/index.html")
    })
  ]
};
