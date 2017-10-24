"use strict";

var include = require("../../node/#/_include")
  , element = require("../valid-element");

module.exports = function () {
 return include.call(element(this));
};
