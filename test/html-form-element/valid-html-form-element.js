"use strict";

module.exports = function (t, a) {
	var form;
	a.throws(function () {
		t({});
	}, "Other");
	if (typeof document !== "undefined") {
		form = document.createElement("form");
		a(t(form), form, "Form");
	}
};
