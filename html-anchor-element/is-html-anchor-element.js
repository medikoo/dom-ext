"use strict";

var isElement = require("../html-element/is-html-element");

module.exports = function (anchor) {
	return Boolean(isElement(anchor) && (anchor.nodeName.toLowerCase() === "a"));
};
