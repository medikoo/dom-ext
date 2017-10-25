"use strict";

var startsWith = require("es5-ext/string/#/starts-with")
  , endsWith   = require("es5-ext/string/#/ends-with");

var nonAsciiRe = /[\0-/:-@[-`{-\uffff]/g
  , dashRe = /-{2,}/g
  , startsWithDigit = RegExp.prototype.test.bind(/^\d/);

module.exports = function (name) {
	name = String(name)
		.toLowerCase()
		.trim()
		.replace(nonAsciiRe, "-")
		.replace(dashRe, "-");
	if (startsWith.call(name, "-")) name = name.slice(1);
	if (endsWith.call(name, "-")) name = name.slice(0, -1);
	if (startsWithDigit(name)) name = "a" + name;
	if (!name) name = "x";
	return name;
};
