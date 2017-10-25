"use strict";

var isValue = require("es5-ext/object/is-value");

module.exports = function (t, a) {
	if (typeof document === "undefined") return;
	if (!isValue(document.body)) return;
	if (typeof document.body.offsetWidth !== "number") return;
	a.deep(t.call(document.createElement("p")), { width: 0, height: 0 });
};
