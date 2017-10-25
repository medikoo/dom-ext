"use strict";

var isForm = require("./is-html-form-element");

module.exports = function (value) {
	if (!isForm(value)) throw new TypeError(value + " is not a HTMLForm");
	return value;
};
