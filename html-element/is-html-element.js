"use strict";

var isElement = require("../element/is-element");

module.exports = function (el) {
	return Boolean(isElement(el) && (typeof el.className === "string"));
};
