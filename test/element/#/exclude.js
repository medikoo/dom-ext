"use strict";

module.exports = function (t, a) {
	var el;

	if (typeof document === "undefined") return;

	el = document.createElement("p").appendChild(document.createElement("span"));

	t.call(el); // Nothing happens
	a(el.parentNode, null, "Removed");
};
