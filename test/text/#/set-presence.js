"use strict";

module.exports = function (t, a) {
	var parent, node;

	if (typeof document === "undefined") return;

	parent = document.createElement("p");
	node = parent.appendChild(document.createTextNode("foo"));

	t.call(node, true); // Nothing happens
	a(parent.firstChild, node, "Included");
	parent.removeChild(node);
	a.throws(function () {
 t.call(node, true);
}, "Removed manually");
	parent.appendChild(node);
	t.call(node);
	a(node.parentNode, null, "Removed");
	t.call(node, true);
	a(parent.firstChild, node, "Include after exclude");
};
