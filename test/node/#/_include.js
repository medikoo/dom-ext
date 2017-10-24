"use strict";

var exclude = require("../../../node/#/_exclude");

module.exports = function (t, a) {
	var parent, el;

	if (typeof document === "undefined") return;

	parent = document.createElement("p");
	el = parent.appendChild(document.createTextNode(""));

	t.call(el); // Nothing happens
	a(parent.firstChild, el, "Included");
	parent.removeChild(el);
	a.throws(function () {
 t.call(el);
}, "Removed manually");
	parent.appendChild(el);
	exclude.call(el);
	t.call(el);
	a(parent.firstChild, el, "Include after exclude");
};
