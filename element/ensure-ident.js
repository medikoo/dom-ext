// Ensure provided string is a valid id and return it

"use strict";

var isIdent = require("./is-ident");

module.exports = function (id) {
	if (isIdent(id)) return String(id);
	throw new TypeError(id + " is not a valid ident string");
};
