"use strict";

var aFrom = require("es5-ext/array/from");

module.exports = function (t, a) {
	var el, el2, col1, col2, c1, c2;

	if (typeof document === "undefined") return;

	el = document.createElement("p");
	el.appendChild(document.createElement("span"));

	col1 = [document.createElement("span"), document.createElement("b")];
	col2 = [document.createElement("div"), document.createElement("p")];

	a(t.call(el, col1), el, "Returns self");
	a.deep(aFrom(el.childNodes), col1, "Replace #1");
	a.deep(aFrom(t.call(el, col2).childNodes), col2, "Replace #2");

	el2 = document.createElement("p");
	c1 = el2.appendChild(document.createElement("span"));
	c2 = el2.appendChild(document.createElement("hr"));

	a.deep(aFrom(t.call(el, el2.childNodes).childNodes), [c1, c2],
		"Replace from childNodes");

	a.deep(t.call(el).childNodes, [], "Empty");
};
