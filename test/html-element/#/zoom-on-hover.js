"use strict";

var isValue = require("es5-ext/object/is-value");

module.exports = function (t, a) {
	var el;

	if (typeof document === "undefined") return;
	if (!isValue(document.body)) return;
	if (typeof document.body.offsetWidth !== "number") return;

	el = document.createElement("p");
	el.appendChild(document.createElement("div"));

	if (el.onmousewheel === undefined && el.onwheel === undefined) return;
	a(t.call(el, { width: 1000, height: 1000, initTimeout: 0 }), el);
};
