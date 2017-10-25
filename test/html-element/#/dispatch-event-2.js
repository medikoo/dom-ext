"use strict";

var isValue = require("es5-ext/object/is-value");

module.exports = function (t, a) {
	var el, invoked;
	if (typeof document === "undefined") return;
	if (!isValue(document.addEventListener)) return;

	el = document.createElement("p");
	el.addEventListener(
		"click",
		function () {
			invoked = true;
		},
		false
	);
	t.call(el, "click");
	a(invoked, true);
};
