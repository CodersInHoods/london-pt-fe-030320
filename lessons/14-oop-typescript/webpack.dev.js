const path = require("path");
const fs = require("fs");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const appDirectory = fs.realpathSync(process.cwd());

const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 8081;

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: resolveAppPath("public"),
    compress: true,
    hot: true,
    host,
    port,
    publicPath: "/"
  }
});
