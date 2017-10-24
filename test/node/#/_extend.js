"use strict";

var aFrom = require("es5-ext/array/from");

module.exports = function (t, a) {
	var el1, el2, el3, node, c1, c2;

	if (typeof document === "undefined") return;

	el1 = document.createElement("p");
	el2 = document.createElement("div");

	node = t.call(el2, el1, "Test").childNodes[1];
	a(node.nodeType, 3, "String to Text node");
	a(node.data, "Test", "String to Text node: content");
	a.deep(aFrom(el2.childNodes), [el1, node],
		"Children");

	el3 = document.createElement("p");
	c1 = el3.appendChild(document.createElement("span"));
	c2 = el3.appendChild(document.createElement("hr"));

	a.deep(aFrom(t.call(el2, el3.childNodes).childNodes), [el1, node, c1, c2],
		"Move childNodes");
};
