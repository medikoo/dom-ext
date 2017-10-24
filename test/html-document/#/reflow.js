"use strict";

module.exports = function (t, a) {
	if ((typeof document === "undefined") || !document.body.classList) return;

	var pre = document.body.className;
	t.call(document);
	a.not(pre, document.body.className);
};
