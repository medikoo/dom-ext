"use strict";

var aFrom = require("es5-ext/array/from");

module.exports = function (t, a) {
	var el1, child1, child2;
	if (typeof document === "undefined") return;

	el1 = document.createElement("p");
	el1.setAttribute("foo", "bar");
	el1.setAttribute("id", "sdfs");
	el1.appendChild(child1 = document.createElement("span"));
	el1.appendChild(child2 = document.createElement("span"));

	a(el1.attributes.length, 2);
	a(t.call(el1), el1);
	a(el1.attributes.length, 0);
	a.deep(aFrom(el1.childNodes), [child1, child2], "Clear");
};
