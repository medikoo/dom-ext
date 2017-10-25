"use strict";

var isImage = require("./is-html-image-element");

module.exports = function (value) {
	if (!isImage(value)) throw new TypeError(value + " is not a HTMLImage");
	return value;
};
