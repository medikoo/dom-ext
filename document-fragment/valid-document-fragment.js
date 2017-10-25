"use strict";

var isDocumentFragment = require("./is-document-fragment");

module.exports = function (value) {
	if (!isDocumentFragment(value)) {
		throw new TypeError(value + " is not a DOM DocumentFragment");
	}
	return value;
};
