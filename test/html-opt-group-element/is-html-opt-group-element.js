"use strict";

module.exports = function (t, a) {
	a(t(null), false, "Null");
	a(t(1), false, "Primitive");
	a(t({}), false, "Any object");

	if (typeof document !== "undefined") {
		a(t(document.createDocumentFragment()), false, "DocumentFragment");
		a(t(document.createElement("div")), false, "Element");
		a(t(document.createElement("optgroup")), true, "OptGroup");
		a(t(document.createTextNode("content")), false, "Text node");
		a(t(document.createComment("content")), false, "Comment node");
		a(t(document), false, "Document node");
	}
};
