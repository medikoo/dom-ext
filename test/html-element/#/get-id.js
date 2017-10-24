"use strict";

module.exports = function (t, a) {
	var el, id;

	if (typeof document === "undefined") return;

	el = document.createElement("p");

	id = t.call(el);
	a(typeof id, "string", "String");
	a(id.length > 4, true, "Lengthy string");
	a(t.call(el), id, "Reuse");
};
