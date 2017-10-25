"use strict";

var isText = require("./is-text");

module.exports = function (value) {
	if (!isText(value)) throw new TypeError(value + " is not a DOM Text node");
	return value;
};
