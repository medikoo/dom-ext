"use strict";

var isArrayLike = require("es5-ext/object/is-array-like")
  , isElement   = require("../element/is-element");

module.exports = function (form) {
	return Boolean(isElement(form) && (form.nodeName.toLowerCase() === "form") &&
		isArrayLike(form.elements) && form.reset && form.submit);
};
