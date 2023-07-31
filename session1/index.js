// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require("@babel/register")({
  presets: ["@babel/preset-env"],
});

global.Promise = require("bluebird"); // eslint-disable-line no-global-assign
global.XMLHttpRequest = require("xhr2");
global.fetch = require("node-fetch");

// Import the rest of our application.
module.exports = require("./server.js");
