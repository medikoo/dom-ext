"use strict";

var document        = require("../valid-html-document")
  , disableControls = require("../../_html-node/#/disable-controls");

module.exports = function () {
 return disableControls.call(document(this));
};
