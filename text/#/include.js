"use strict";

var include = require("../../node/#/_include")
  , text    = require("../valid-text");

module.exports = function () {
 return include.call(text(this));
};
