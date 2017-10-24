"use strict";

module.exports = function (t, a) {
	var node;
	a.throws(function () {
 t({});
}, TypeError, "Other");
	if (typeof document !== "undefined") {
		node = document.createTextNode("");
		a.throws(function () {
 t(node);
}, TypeError, "Text");
		node = document.createComment("");
		a.throws(function () {
 t(node);
}, TypeError, "Text Comment");
		node = document.createElement("div");
		a(t(node), node, "Element");
	}
};
