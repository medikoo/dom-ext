"use strict";

module.exports = function (t, a) {
	var result;
	if (typeof document === "undefined") return;

	a(t.call(document, ""), null, "Empty string");

	a.h1("Rich element");
	result = t.call(document, "<p class=\"elo\">raz<a href=\"dwa\">trzy</a>cztery</p>");
	a(result.nodeName, "P");
	a(result.className, "elo");
	a(result.childNodes.length, 3);
	a(result.firstChild.nodeName, "#text");
	a(result.firstChild.data, "raz");
	a(result.childNodes[1].nodeName, "A");
	a(result.childNodes[1].getAttribute("href"), "dwa");
	a(result.childNodes[1].childNodes.length, 1);
	a(result.childNodes[1].firstChild.data, "trzy");
	a(result.lastChild.data, "cztery");

	a.h1("Many elements");
	result = t.call(document, "<p>fooo</p><div>bar</div>");
	a(result.nodeName, "#document-fragment");
	a(result.childNodes.length, 2);
	a(result.firstChild.nodeName, "P");
	a(result.lastChild.nodeName, "DIV");
};
