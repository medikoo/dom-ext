"use strict";

module.exports = function (t, a) {
	var el, fn = function () {};

	if (typeof document === "undefined") return;

	el = document.createElement("p");
	t.call(el, {
		lorem: "test",
		onclick: fn,
		foo: true,
		bar: false,
		other: null,
		another: undefined
	});

	a(el.childNodes.length, 0, "Children");
	a(el.getAttribute("lorem"), "test", "Regular");
	a(el.getAttribute("onclick"), "onclick", "Listener: Attribute");
	a(el.onclick, fn, "Listener: Value");
	a(el.getAttribute("foo"), "foo", "Boolean (true): Attribute");
	a(el.foo, true, "Boolean (true): Value");
	a(el.hasAttribute("bar"), false, "Boolean (false): Attribute");
	a(el.bar, false, "Boolean (false): Value");
	a(el.hasAttribute("other"), false, "Null:  Undefined");
	a(el.hasAttribute("another"), false, "Undefined: Undefined");
	a(el.hasAttribute("attrfalse"), false, "Attribute object: name");
};
