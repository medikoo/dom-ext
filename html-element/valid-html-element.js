"use strict";

var isElement = require("./is-html-element");

module.exports = function (value) {
	if (!isElement(value)) throw new TypeError(value + " is not a HTMLElement");
	return value;
};
