import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";
// Environment configuration file
dotenv.config();
// Obtaining environment variables
const { ENV, PORT } = process.env;
// Creating express app
const app = express();

if (ENV === "development") {
  console.log("Development config");
  const webpackConfig = require("../../webpack.config.dev.js");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  // Creating a webpack compiler with its configurations
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    serverSideRender: true,
    publicPath: webpackConfig.output.publicPath,
  };
  // Middlewares
  // Middleware to compile all the files and put it on the server
  app.use(webpackDevMiddleware(compiler, serverConfig));
  // Middleware to enable hot reload
  app.use(webpackHotMiddleware(compiler));
}

app.get("*", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="PlatziVideo" />
      <meta property="og:description" content="A place to watch online videos from Platzi!" />
      <link rel="icon" type="image/x-icon" href="assets/static/platzi-video-icon.ico" />
      <link rel="stylesheet" href="assets/app.css" type="text/css" />
      <title>PlatziVideo</title>
    </head>
    <body>
      <div id="app"></div>
      <script src="assets/app.js" type="text/javascript"></script>
    </body>
  </html>
  `);
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server running on port 3000");
  }
});
