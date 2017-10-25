// Validate provided node, so it's a node that may contain child nodes

"use strict";

var is = require("./is");

module.exports = function (value) {
	if (!is(value)) throw new TypeError(value + " is not a capable parent DOM node ");
	return value;
};
