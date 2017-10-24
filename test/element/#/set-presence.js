"use strict";

module.exports = function (t, a) {
	var parent, el;

	if (typeof document === "undefined") return;

	parent = document.createElement("p");
	el = parent.appendChild(document.createElement("span"));

	t.call(el, true); // Nothing happens
	a(parent.firstChild, el, "Included");
	parent.removeChild(el);
	a.throws(function () {
 t.call(el, true);
}, "Removed manually");
	parent.appendChild(el);
	t.call(el);
	a(el.parentNode, null, "Removed");
	t.call(el, true);
	a(parent.firstChild, el, "Include after exclude");
};
