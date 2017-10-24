"use strict";

module.exports = function (t, a) {
	var node;

	if (typeof document === "undefined") return;

	node = document.createElement("p")
		.appendChild(document.createTextNode("foo"));

	t.call(node); // Nothing happens
	a(node.parentNode, null, "Removed");
};
