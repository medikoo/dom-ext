"use strict";

var exclude = require("../../node/#/_exclude")
  , text    = require("../valid-text");

module.exports = function () {
 return exclude.call(text(this));
};
