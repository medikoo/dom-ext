"use strict";

module.exports = function (t, a) {
	a(t(null), "null");
	a(t(undefined), "undefined");
	a(t("foo"), "foo");
	a(t("foo-bar"), "foo-bar");
	a(t("-bar"), "bar");
	a(t("mąćłńora"), "m-ora");
	a(t("  Some    Text  "), "some-text");
	a(t("0moszka"), "a0moszka");
};
