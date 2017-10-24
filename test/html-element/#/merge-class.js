"use strict";

module.exports = function (t, a) {
	var el;

	if (typeof document === "undefined") return;

	el = document.createElement("p");
	a(t.call(el, "raz dwa").className, "raz dwa", "On empty");
	a(t.call(el, "trzy   cztery  ").className, "raz dwa trzy cztery",
		"On Existing");
	a(t.call(el, "trzy pięć raz  ").className, "raz dwa trzy cztery pięć",
		"On overlap");
};
