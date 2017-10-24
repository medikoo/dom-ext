"use strict";

var aFrom = require("es5-ext/array/from");

module.exports = function (t, a) {
	var child, node;
	if (typeof document === "undefined") return;

	node = t(document, ["raz", child = document.createElement("span")]);
	a(node.firstChild.nodeType, 3, "Multi: String: Type");
	a(node.firstChild.data, "raz", "Multi: String: Content");
	a.deep(aFrom(node.childNodes), [node.firstChild, child], "Multi: All");

	node = t(document, ["raz"]);
	a(node.nodeType, 3, "Single: String: Type");
	a(node.data, "raz", "Single: String: Content");

	a(t(document, [child]), child, "Single");
};
