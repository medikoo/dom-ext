"use strict";

var getCookie = require("../../../html-document/#/get-cookie")
  , setCookie = require("../../../html-document/#/set-cookie");

module.exports = function (t, a) {
	if ((typeof document === "undefined") || (document.cookie === undefined)) {
		return;
	}

	setCookie.call(document, "foo", "bar");
	a(getCookie.call(document, "foo"), "bar", "Pre");
	t.call(document, "foo");
	a(getCookie.call(document, "foo"), null, "Erase");
};
