// To be DOM4 standard

"use strict";

var remove = require("../../node/#/_remove")
  , text   = require("../valid-text");

module.exports = function () {
 remove.call(text(this));
};
