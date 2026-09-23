import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __direname = path.dirname(__filename);

export default {
  entry: "./src/index.js",
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.html$/i, use: ["html-loader"] },
      { test: /\.(png|svg|jpg|jpeg|gif|webp)$/i, type: "asset/resource" },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__direname, "dist"),
    clean: true,
    html: {
      meta: {
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1",
      },
      title: "Production",
    },
  },
};
