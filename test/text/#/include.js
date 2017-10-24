"use strict";

var exclude = require("../../../text/#/exclude");

module.exports = function (t, a) {
	var parent, node;

	if (typeof document === "undefined") return;

	parent = document.createElement("p");
	node = parent.appendChild(document.createTextNode("foo"));

	t.call(node); // Nothing happens
	a(parent.firstChild, node, "Included");
	parent.removeChild(node);
	a.throws(function () {
 t.call(node);
}, "Removed manually");
	parent.appendChild(node);
	exclude.call(node);
	t.call(node);
	a(parent.firstChild, node, "Include after exclude");
};
