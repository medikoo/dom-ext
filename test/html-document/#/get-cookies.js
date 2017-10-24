"use strict";

var setCookie   = require("../../../html-document/#/set-cookie")
  , eraseCookie = require("../../../html-document/#/erase-cookie");

module.exports = function (t, a) {
	if ((typeof document === "undefined") || (document.cookie === undefined)) {
		return;
	}

	a.deep(t.call(document), {}, "Empty");
	setCookie.call(document, "foo", "bar");
	a.deep(t.call(document), { foo: "bar" }, "First");
	setCookie.call(document, "raz", "dwa");
	a.deep(t.call(document), { foo: "bar", raz: "dwa" }, "Many");
	eraseCookie.call(document, "foo");
	eraseCookie.call(document, "raz");
};
