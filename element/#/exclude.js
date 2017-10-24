"use strict";

var exclude = require("../../node/#/_exclude")
  , element = require("../valid-element");

module.exports = function () {
 return exclude.call(element(this));
};
