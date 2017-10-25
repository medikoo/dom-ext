"use strict";

var isElement = require("./is-html-option-element");

module.exports = function (value) {
	if (!isElement(value)) throw new TypeError(value + " is not a HTMLOptionElement");
	return value;
};
