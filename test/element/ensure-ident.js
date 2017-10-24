"use strict";

module.exports = function (t, a) {
	a.throws(function () {
 t();
}, TypeError);
	a.throws(function () {
 t(null);
}, TypeError);
	a(t("foo"), "foo");
	a.throws(function () {
 t("foo bar");
}, TypeError);
	a(t("foo-bar"), "foo-bar");
	a(t("foo_bar"), "foo_bar");
	a(t("FOO"), "FOO");
	a.throws(function () {
 t("FOO BAR");
}, TypeError);
	a(t("FOO-BAR"), "FOO-BAR");
	a(t("FOO_BAR"), "FOO_BAR");
	a.throws(function () {
 t("0foo");
}, TypeError);
	a(t("foo0"), "foo0");
	a(t("foo-0"), "foo-0");
	a(t("fo_0"), "fo_0");
	a(t("fo_0--"), "fo_0--");
	a.throws(function () {
 t("-fo_0--");
}, TypeError);
	a(t("fo_0.-"), "fo_0.-");
	a(t("fo_0:-"), "fo_0:-");
};
