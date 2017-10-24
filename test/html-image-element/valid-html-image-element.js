"use strict";

module.exports = function (t, a) {
	var img;
	a.throws(function () {
		t({});
	}, "Other");
	if (typeof document !== "undefined") {
		img = document.createElement("img");
		a(t(img), img, "Img");
	}
};
