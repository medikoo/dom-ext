"use strict";

var aFrom = require("es5-ext/array/from");

module.exports = function (t, a) {
	var el1, el2, el3, el4, fn = function () {}, node;

	if (typeof document === "undefined") return;

	el1 = document.createElement("p");
	el2 = document.createElement("div");
	el2 = t.call(el2, { class: "test",
onclick: fn,
foo: true,
bar: false,
		   other: null,
another: undefined });

	a(el2.childNodes.length, 0, "With attrs: Children");
	a(el2.getAttribute("class"), "test", "With attrs: Attribute");
	a(el2.onclick, fn, "With attrs: Listener attribute");
	a(el2.getAttribute("foo"), "foo", "With attrs: Boolean (true) attribute");
	a(el2.hasAttribute("bar"), false, "With attrs: Boolean (false) attribute");
	a(el2.hasAttribute("other"), false, "With attrs: Boolean (false) attribute");
	a(el2.hasAttribute("another"), false,
		"With attrs: Boolean (false) attribute");

	t.call(el2, { class: false, onclick: null });
	a(el2.hasAttribute("class"), false, "Cancelled attribute (false)");
	a(el2.hasAttribute("onclick"), false, "Cancelled attribute (null)");
	a(el2.onclick, null, "Cancelled function property");

	el3 = document.createElement("form");
	t.call(el3, el1, el2);
	a(el3.nodeName.toLowerCase(), "form", "With children: NodeName");
	a(el3.nodeType, 1, "With children: NodeType");
	a.deep(aFrom(el3.childNodes), [el1, el2],
		"With children: Children");

	el4 = document.createElement("section");
	el4 = t.call(el4, { class: "bar" }, el3, el2);
	a(el4.nodeName.toLowerCase(), "section", "With attrs & children: NodeName");
	a(el4.nodeType, 1, "With attrs & children: NodeType");
	a(el4.getAttribute("class"), "bar", "With attrs & children: Attribute");
	a.deep(aFrom(el4.childNodes), [el3, el2],
		"With attrs & children: Children");

	node = t.call(document.createElement("div"), el2, "Test").childNodes[1];
	a(node.nodeType, 3, "String to Text node");
	a(node.data, "Test", "String to Text node: content");

	node = t.call(document.createElement("div"), "String").childNodes[0];
	a(node.data, "String", "String to Text node (no attrs)");
};
