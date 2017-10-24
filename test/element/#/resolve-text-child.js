"use strict";

module.exports = function (t, a) {
	var el;

	if (typeof document === "undefined") return;

	el = document.createElement("p");

	a(t.call(el).nodeType, 3);
	a(t.call(el), el.firstChild);
	a(t.call(el), t.call(el));

	var otherText = document.createTextNode("");
	el.insertBefore(otherText, el.firstChild);
	a(t.call(el), otherText);

	el.insertBefore(document.createElement("a"), el.firstChild);
	a.not(t.call(el), otherText);
	a(t.call(el).nodeType, 3);
	a(t.call(el), t.call(el));
};
