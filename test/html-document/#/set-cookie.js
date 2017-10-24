"use strict";

var getCookie = require("../../../html-document/#/get-cookie")
  , eraseCookie = require("../../../html-document/#/erase-cookie");

module.exports = function (t, a) {
	if ((typeof document === "undefined") || (document.cookie === undefined)) {
		return;
	}

	a(getCookie.call(document, "foo"), null, "Pre");
	t.call(document, "foo", "bar");
	a(getCookie.call(document, "foo"), "bar", "Post");
	eraseCookie.call(document, "foo");
};
