"use strict";

var aFrom = require("es5-ext/array/from");

module.exports = function (t, a) {
	var el1;
	if (typeof document === "undefined") return;

	el1 = document.createElement("p");
	el1.appendChild(document.createElement("span"));
	el1.appendChild(document.createElement("span"));

	a(t.call(el1), el1, "Return");
	a.deep(aFrom(el1.childNodes), [], "Clear");
};
