"use strict";

var element         = require("../valid-html-element")
  , disableControls = require("../../_html-node/#/disable-controls");

module.exports = function (filter) {
	return disableControls.call(element(this), filter);
};
