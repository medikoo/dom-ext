"use strict";

module.exports = function (t, a) {
	var el, control;

	if (typeof document === "undefined") return;

	document.body.innerHTML = "";
	el = document.body.appendChild(document.createElement("p"));
	control = el.appendChild(document.createElement("select"));

	a.deep(t.call(document), [control], "Result");
	a(control.getAttribute("disabled"), "disabled", "Attribute");
	a(control.disabled, true, "Disabled");
};
