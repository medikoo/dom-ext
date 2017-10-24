"use strict";

module.exports = function (t, a) {
	var div;
	a.throws(function () {
		t({});
	}, "Other");
	if (typeof document !== "undefined") {
		div = document.createElement("div");
		a(t(div), div, "Element");
	}
};
