"use strict";

module.exports = function (t, a) {
	a(t(null), false, "Null");
	a(t("test"), false, "Primitive");
	a(t({}), false, "Any object");

	if (typeof document === "undefined") return;

	a(t(document.createDocumentFragment()), true, "DocumentFragment");
	a(t(document.createElement("div")), true, "DocumentFragment");
	a(t(document.createTextNode("content")), false, "Text node");
	a(t(document.createComment("content")), false, "Comment node");
	a(t(document), true, "Document node");
	a(t(document.createAttribute("raz")), false, "Attribute");
};
