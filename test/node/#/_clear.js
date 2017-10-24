"use strict";

module.exports = function (t, a) {
	var el;

	if (typeof document === "undefined") return;

	el = document.createElement("p");
	el.appendChild(document.createElement("span"));
	el.appendChild(document.createElement("span"));

	a(t.call(el), el, "Returns self");
	a(el.childNodes.length, 0, "Cleared");
	t.call(el);
	a(el.childNodes.length, 0, "Cleared on empty");
};
