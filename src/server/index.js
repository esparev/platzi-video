// Ignores css classes at server side rendering
require("ignore-styles");

require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

require("./server.js");
