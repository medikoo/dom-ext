"use strict";

var aFrom = require("es5-ext/array/from");

module.exports = function (t, a) {
	var parent, el, pre, child, text;
	if (typeof document === "undefined") return;

	parent = document.createElement("p");
	pre = parent.appendChild(document.createElement("span"));
	el = parent.appendChild(document.createElement("span"));

	t.call(el, "raz", child = document.createElement("span"));
	text = parent.childNodes[1];
	a(text.nodeType, 3, "String: Type");
	a.deep(aFrom(parent.childNodes), [pre, text, child, el]);
	a(el.childNodes.length, 0, "No self children");
};
