"use strict";

module.exports = function (t, a) {
	var el;

	if (typeof document === "undefined") return;

	el = document.createElement("p");
	t.call(el.appendChild(document.createElement("span")));
	a(el.childNodes.length, 0);
};
