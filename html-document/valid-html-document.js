"use strict";

var isDocument = require("./is-html-document");

module.exports = function (value) {
	if (!isDocument(value)) {
		throw new TypeError(value + " is not a HTMLDocument");
	}
	return value;
};
