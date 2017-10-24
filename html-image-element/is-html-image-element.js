"use strict";

var isElement = require("../element/is-element");

module.exports = function (image) {
	return Boolean(isElement(image) && (image.nodeName.toLowerCase() === "img") &&
		(image.width !== undefined));
};
