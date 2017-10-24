"use strict";

var contains = require("es5-ext/string/#/contains");

module.exports = function (t, a) {
	var el;
	if (typeof document === "undefined") return;

	el = t.call(document, function (foo) {
 return foo;
}, "raz");

	a(el.nodeName.toLowerCase(), "script", "Name");
	a(contains.call(el.firstChild.data, "return foo;"), true, "Content");
};
