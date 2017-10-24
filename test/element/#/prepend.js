"use strict";

var aFrom = require("es5-ext/array/from");

module.exports = function (t, a) {
	var el, prechild, child, text;
	if (typeof document === "undefined") return;

	el = document.createElement("p");
	prechild = el.appendChild(document.createElement("span"));

	t.call(el, "raz", child = document.createElement("span"));
	text = el.childNodes[0];
	a(text.nodeType, 3, "String: Type");
	a.deep(aFrom(el.childNodes), [text, child, prechild]);
};
