"use strict";

var aFrom = require("es5-ext/array/from");

module.exports = function (t, a) {
	var el, child1, child2, child3, list;
	if (typeof document === "undefined") return;

	el = document.createElement("p");
	child1 = document.createElement("span");
	child2 = document.createElement("b");
	child3 = document.createElement("a");

	list = [child1, child3, child2];
	t.call(el, list);
	a.deep(aFrom(el.childNodes), list, "Init");

	list = [child1, child3, child2];
	t.call(el, list);
	a.deep(aFrom(el.childNodes), list, "Reorder");

	list = [child1, child2];
	t.call(el, list);
	a.deep(aFrom(el.childNodes), list, "Remove");

	list = [child2, child1, child3];
	t.call(el, list);
	a.deep(aFrom(el.childNodes), list, "Add");
};
