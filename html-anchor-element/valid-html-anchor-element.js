"use strict";

var isAnchor = require("./is-html-anchor-element");

module.exports = function (value) {
	if (!isAnchor(value)) throw new TypeError(value + " is not a HTMLAnchorElement");
	return value;
};
