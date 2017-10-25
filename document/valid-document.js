"use strict";

var isDocument = require("./is-document");

module.exports = function (value) {
	if (!isDocument(value)) {
		throw new TypeError(value + " is not a DOM Document");
	}
	return value;
};
