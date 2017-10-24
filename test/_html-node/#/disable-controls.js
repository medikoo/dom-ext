"use strict";

module.exports = function (t, a) {
	var el, control;

	if (typeof document === "undefined") return;

	el = document.createElement("p");
	control = el.appendChild(document.createElement("select"));

	a.deep(t.call(el), [control], "Result");
	a(control.getAttribute("disabled"), "disabled", "Attribute");
	a(control.disabled, true, "Disabled");
};
