"use strict";

var replaceContent = require("../../node/#/_replace-content")
  , element        = require("../valid-element");

module.exports = function () {
	return replaceContent.apply(element(this), arguments);
};
