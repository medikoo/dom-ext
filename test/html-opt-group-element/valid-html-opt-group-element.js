"use strict";

module.exports = function (t, a) {
	var el;
	a.throws(function () {
		t({});
	}, "Other");
	if (typeof document !== "undefined") {
		el = document.createElement("optgroup");
		a(t(el), el, "Optgroup");
	}
};
