"use strict";

var isNode = require("./is-node");

module.exports = function (value) {
	if (!isNode(value)) throw new TypeError(value + " is not a DOM node");
	return value;
};
