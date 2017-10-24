"use strict";

var remove = require("./_remove")
  , node   = require("../valid-node");

module.exports = function () {
 remove.call(node(this));
};
