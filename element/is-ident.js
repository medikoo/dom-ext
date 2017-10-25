// Is a valid id (or name) string
// See: http://stackoverflow.com/a/79022

"use strict";

var isValue = require("es5-ext/object/is-value");

var isIdent = RegExp.prototype.test.bind(/^[a-zA-Z][0-9a-zA-Z\-_:.]*$/);

module.exports = function (id) {
	if (!isValue(id)) return false;
	return isIdent(id);
};
