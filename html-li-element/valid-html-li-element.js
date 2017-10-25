"use strict";

var isElement = require("./is-html-li-element");

module.exports = function (value) {
	if (!isElement(value)) throw new TypeError(value + " is not a HTMLLiElement");
	return value;
};
