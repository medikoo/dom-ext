"use strict";

module.exports = function (t, a) {
	var el;
	a.throws(function () {
		t({});
	}, "Other");
	if (typeof document !== "undefined") {
		el = document.createElement("li");
		a(t(el), el, "Li");
	}
};
