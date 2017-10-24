"use strict";

var dispatch = require("../../../html-element/#/dispatch-event-2");

module.exports = function (t, a, d) {
	var form, e;
	if (typeof document === "undefined") {
		d();
		return;
	}

	form = document.createElement("form");
	t.call(form);
	form.addEventListener("submit", function () {
 e = true;
});
	dispatch.call(form, "change");
	setTimeout(function () {
		a(e, true);
		d();
	}, 10);
};
