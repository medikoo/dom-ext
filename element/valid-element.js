"use strict";

var isElement = require("./is-element");

module.exports = function (value) {
	if (!isElement(value)) {
		throw new TypeError(value + " is not a DOM Element");
	}
	return value;
};
