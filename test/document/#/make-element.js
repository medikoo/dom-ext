"use strict";

var aFrom = require("es5-ext/array/from");

module.exports = function (t, a) {
	var el1, el2, el3, el4, fn = function () {}, node;

	if (typeof document === "undefined") return;

	t = t.bind(document);
	el1 = t("p");

	a(el1.nodeName.toLowerCase(), "p", "NodeName");
	a(el1.nodeType, 1, "NodeType");
	a(el1.childNodes.length, 0, "Children");

	el2 = t("div", { class: "test", onclick: fn });

	a(el2.nodeName.toLowerCase(), "div", "With attrs: NodeName");
	a(el2.nodeType, 1, "With attrs: NodeType");
	a(el2.childNodes.length, 0, "With attrs: Children");
	a(el2.getAttribute("class"), "test", "With attrs: Attribute");
	a(el2.onclick, fn, "With attrs: Listener attribute");

	el3 = t("form", el1, el2);
	a(el3.nodeName.toLowerCase(), "form", "With children: NodeName");
	a(el3.nodeType, 1, "With children: NodeType");
	a.deep(aFrom(el3.childNodes), [el1, el2], "With children: Children");

	el4 = t("section", { class: "bar" }, el3, el2);
	a(el4.nodeName.toLowerCase(), "section", "With attrs & children: NodeName");
	a(el4.nodeType, 1, "With attrs & children: NodeType");
	a(el4.getAttribute("class"), "bar", "With attrs & children: Attribute");
	a.deep(aFrom(el4.childNodes), [el3, el2], "With attrs & children: Children");

	node = t("div", el2, "Test").childNodes[1];
	a(node.nodeType, 3, "String to Text node");
	a(node.data, "Test", "String to Text node: content");

	node = t("div", "String").childNodes[0];
	a(node.data, "String", "String to Text node (no attrs)");
};
