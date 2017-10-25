"use strict";

var isElement = require("./is-html-opt-group-element");

module.exports = function (value) {
	if (!isElement(value)) throw new TypeError(value + " is not a HTMLOptGroupElement");
	return value;
};
