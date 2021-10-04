const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

require("dotenv").config();

const isDev = process.env.ENV === "development";
const entry = ["./src/frontend/index.js"];

if (isDev) {
  entry.push(
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true"
  );
}

module.exports = {
  // Applying shorthand for entry
  entry,
  mode: process.env.ENV,
  output: {
    path: path.resolve(__dirname, "src/server/public"),
    filename: isDev ? "assets/app.js" : "assets/app-[fullhash].js",
    assetModuleFilename: "assets/static/[fullhash][ext][query]",
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
        test: /\.(png|gif|jpg|svg)$/,
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
    isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
    isDev
      ? () => {}
      : new CompressionWebpackPlugin({
          test: /\.js$|\.css$/,
          filename: "[path][base].gz",
        }),
    isDev ? () => {} : new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev ? "assets/app.css" : "assets/app-[fullhash].css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(
            __dirname,
            "src",
            "frontend/assets/static/platzi-video-icon.ico"
          ),
          to: "assets/static",
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    // Vendor files
    splitChunks: {
      chunks: "async", // Asynchronous chunks
      // Cache group to make vendor files
      cacheGroups: {
        vendors: {
          name: "vendors",
          chunks: "all", // Take all chunks
          reuseExistingChunk: true,
          priority: 1, // Max priority to all chunks
          filename: isDev ? "assets/vendor.js" : "assets/vendor-[fullhash].js",
          enforce: true, // Will do always
          /**
           * Tests chunks
           * @param {*} module
           * @param {*} chunks
           * @returns chunk that's not called 'vendors' and its contained in node_modules
           */
          test(module, chunks) {
            // Obtain chunk name
            const name = module.nameForCondition && module.nameForCondition();
            return (chunk) =>
              chunk.name !== "vendors" && /[\\/]__node_modules[\\/]/.test(name);
          },
        },
      },
    },
  },
  devServer: {
    historyApiFallback: true,
  },
};
