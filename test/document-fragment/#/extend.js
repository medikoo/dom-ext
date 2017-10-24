"use strict";

var aFrom = require("es5-ext/array/from");

module.exports = function (t, a) {
	var el1, el2, node, df;

	if (typeof document === "undefined") return;

	el1 = document.createElement("p");
	el2 = document.createElement("div");
	df = document.createDocumentFragment();

	t.call(df, el1, "foo:bar", el2);

	node = df.childNodes[1];
	a(node.nodeType, 3, "String to Text node");
	a(node.data, "foo:bar", "String to Text node: content");
	a.deep(aFrom(df.childNodes), [el1, node, el2], "Children");
};
