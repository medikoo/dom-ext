"use strict";

var isValidFormat = RegExp.prototype.test.bind(/^[a-z][a-z0-9]+$/);

module.exports = function (t, a) {
	a(t("foo"), "foo");
	a(t("foo"), "foo-2");
	a(t("foo"), "foo-3");
	a(t("foo"), "foo-4");
	a(t("foo-bar"), "foo-bar");
	a(t("-bar"), "bar");
	a(t("mąćłńora"), "m-ora");
	a(t("  Some    Text  "), "some-text");
	a(isValidFormat(t()), true);
};
