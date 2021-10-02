import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import serverRoutes from "../frontend/routes/ServerRoutes.js";
import reducer from "../frontend/reducers";
import Layout from "../frontend/components/Layout.jsx";
import initialState from "../frontend/initialState.js";

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

/**
 * Stores the initial HTML for the app to render
 * on the server side
 * @returns initial HTML as a string
 */
const setResponse = (html, preloadedState) => {
  return `
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
      <div id="app">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          "\\u003c"
        )}
      </script>
      <script src="assets/app.js" type="text/javascript"></script>
    </body>
  </html>`;
};

/**
 * Renders the app from the server side
 * @param {*} req - request
 * @param {*} res - response
 * @returns configured HTML for rendering
 */
const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  // Preload the initial state defined in store
  const preloadedState = store.getState();
  // Store React elements to its initial HTML as a String for rendering
  // renderRoutes receives the array from serverRoutes
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Layout>{renderRoutes(serverRoutes)}</Layout>
      </StaticRouter>
    </Provider>
  );

  res.send(setResponse(html, preloadedState));
};

app.get("*", renderApp);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server running on port 3000");
  }
});
