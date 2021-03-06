const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: [
    "./src/frontend/index.js",
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true",
  ],
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/app.js",
    assetModuleFilename: "assets/static/[hash][ext][query]",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|gif|jpg|svg|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/static/[md5:hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "assets/app.css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "frontend/assets/static"),
          to: "assets/static",
        },
      ],
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    open: true,
  },
};
