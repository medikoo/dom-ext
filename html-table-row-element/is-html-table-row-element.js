"use strict";

var isElement = require("../html-element/is-html-element");

module.exports = function (el) {
	return Boolean(isElement(el) && (el.nodeName.toLowerCase() === "tr") &&
		(typeof el.rowIndex === "number"));
};
