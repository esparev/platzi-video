import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import boom from "@hapi/boom";
import passport from "passport";
import axios from "axios";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import serverRoutes from "../frontend/routes/ServerRoutes";
import reducer from "../frontend/reducers";
import Layout from "../frontend/components/Layout";
import initialState from "../frontend/initialState";
import getManifest from "./getManifest";
import { config } from "./config";

// Creating express app
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// Basic strategy
require("./utils/auth/strategies/basic");

if (config.dev) {
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
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) {
      req.hashManifest = getManifest();
    }
    next();
  });
  // Public folder config to load from webpack's bundle
  app.use(express.static(`${__dirname}/public`));
  // Middleware to secure the express app by setting various HTTP headers
  app.use(helmet());
  /* 
  permittedCrossDomainPolicies blocks cross-domain content 
  to decrease band-with from mostly adobe products
  */
  app.use(helmet.permittedCrossDomainPolicies());
  /*
  Disables the header that shows information about the server
  our app is connected to
  */
  app.disable("x-powered-by");
}

/**
 * Stores the initial HTML for the app to render
 * on the server side
 * @returns initial HTML as a string
 */
const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest["vendors.css"] : "assets/app.css";
  const mainBuild = manifest ? manifest["main.js"] : "assets/app.js";
  const vendorBuild = manifest ? manifest["vendors.js"] : "assets/vendor.js";

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
      <link rel="stylesheet" href=${mainStyles} type="text/css" />
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
      <script src=${mainBuild} type="text/javascript"></script>
      <script src=${vendorBuild} type="text/javascript"></script>
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

  res.set(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' *; media-src *; script-src 'self' 'unsafe-eval' 'sha256-KlbEnYxSWkHOFqQh7kFtymSpvMiOLtHEL5Zq91zyyjA='; style-src 'self' https://fonts.googleapis.com; font-src *"
  );

  res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.post("/auth/sign-in", async function (req, res, next) {
  const { rememberMe } = req.body;
  passport.authenticate("basic", function (error, data) {
    try {
      if (error || !data) {
        next(boom.unauthorized());
      }

      req.login(data, { session: false }, async function (error) {
        if (error) {
          next(error);
        }

        const { token, ...user } = data;

        // If rememberMe is true the expiration will be in 30 days
        // otherwise, it will be in 2 hours
        if (!config.dev) {
          res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: rememberMe ? THIRTY_DAYS_IN_MS : TWO_HOURS_IN_MS,
          });
        } else {
          res.cookie("token", token, {
            maxAge: rememberMe ? THIRTY_DAYS_IN_MS : TWO_HOURS_IN_MS,
          });
        }

        res.status(200).json(user);
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

app.post("/auth/sign-up", async function (req, res, next) {
  const { body: user } = req;

  try {
    const userData = await axios({
      url: `${config.apiUrl}/api/auth/sign-up`,
      method: "post",
      data: {
        email: user.email,
        name: user.name,
        password: user.password,
      },
    });

    res.status(201).json({
      name: req.body.name,
      email: req.body.email,
      id: userData.data.password,
    });
  } catch (error) {
    next(error);
  }
});

// Ensure that the server responds to all the routes
app.get("*", renderApp);

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port ${config.port}`);
  }
});
