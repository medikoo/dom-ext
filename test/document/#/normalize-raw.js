"use strict";

module.exports = function (t, a) {
	var el1, el2, el3, result, c1, c2;

	if (typeof document === "undefined") return;

	el1 = document.createElement("p");
	el2 = document.createElement("div");

	result = t.call(document, el2, el1, "Test", null);
	a.deep(result, [el2, el1, "Test"]);

	el3 = document.createElement("p");
	c1 = el3.appendChild(document.createElement("span"));
	c2 = el3.appendChild(document.createElement("hr"));

	a.deep(t.call(document, el2, el3.childNodes), [el2, c1, c2],
		"Child nodes");

	a(t.call(document, [[el1]]), el1, "Nested list");
	a.deep(t.call(document, [[el1]], el2, el3, el1, el3), [el2, el1, el3], "Unique");
};
