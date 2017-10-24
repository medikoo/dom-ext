"use strict";

module.exports = function (t, a) {
	a.throws(function () {
		t({});
	}, "Other");
	if (typeof document !== "undefined") {
		a(t(document), document, "Document");
	}
};
