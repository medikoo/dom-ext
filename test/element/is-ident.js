"use strict";

module.exports = function (t, a) {
	a(t(), false);
	a(t(null), false);
	a(t("foo"), true);
	a(t("foo bar"), false);
	a(t("foo-bar"), true);
	a(t("foo_bar"), true);
	a(t("FOO"), true);
	a(t("FOO BAR"), false);
	a(t("FOO-BAR"), true);
	a(t("FOO_BAR"), true);
	a(t("0foo"), false);
	a(t("foo0"), true);
	a(t("foo-0"), true);
	a(t("fo_0"), true);
	a(t("fo_0--"), true);
	a(t("-fo_0--"), false);
	a(t("fo_0.-"), true);
	a(t("fo_0:-"), true);
};
