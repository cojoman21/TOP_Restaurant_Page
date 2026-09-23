import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
});
