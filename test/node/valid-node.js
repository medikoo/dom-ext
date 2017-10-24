"use strict";

module.exports = function (t, a) {
	var node;
	a.throws(function () {
 t({});
}, "Other");
	if (typeof document !== "undefined") {
		node = document.createTextNode("");
		a(t(node), node, "Text");
		node = document.createComment("");
		a(t(node), node, "Text Comment");
		node = document.createElement("div");
		a(t(node), node, "Element");
	}
};
