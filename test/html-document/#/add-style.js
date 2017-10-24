"use strict";

var last = require("es5-ext/array/#/last");

module.exports = function (t, a) {
	var style;
	if (typeof document === "undefined") return;

	t.call(document, "p { color: red; }");

	style = last.call(document.head.getElementsByTagName("style"));
	a(style.textContent.trim(), "p { color: red; }", "String");

	t.call(document,
		{ form: { padding: "10px 10px", backgroundColor: "olive" } });

	a((new RegExp("form\\s*{\\s*padding\\s*:\\s*10px 10px\\s*;\\s*background-" +
		"color\\s*:\\s*olive\\s*;\\s*}")).test(style.textContent), true, "Object");
};
