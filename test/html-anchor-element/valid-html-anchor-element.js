"use strict";

module.exports = function (t, a) {
	var anchor;
	a.throws(function () {
		t({});
	}, "Other");
	if (typeof document !== "undefined") {
		anchor = document.createElement("a");
		a(t(anchor), anchor, "Anchor");
	}
};
