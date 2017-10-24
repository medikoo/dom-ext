"use strict";

var setCookie = require("../../../html-document/#/set-cookie")
  , eraseCookie = require("../../../html-document/#/erase-cookie");

module.exports = function (t, a) {
	if ((typeof document === "undefined") || (document.cookie === undefined)) {
		return;
	}

	a(t.call(document, "foo2"), null, "Non existing");
	setCookie.call(document, "foo2", "bar");
	a(t.call(document, "foo2"), "bar", "Existing");
	eraseCookie.call(document, "foo2");
};
