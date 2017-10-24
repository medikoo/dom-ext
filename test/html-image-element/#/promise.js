"use strict";

var isPromise = require("deferred/is-promise");

module.exports = function (t, a) {
	var img;
	if ((typeof document === "undefined") || !document.createEvent) return;

	img = document.createElement("img");
	a(isPromise(t.call(img, { timeout: 10 })), true, "Promise");
};
