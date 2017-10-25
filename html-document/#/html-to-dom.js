"use strict";

var value          = require("es5-ext/object/valid-value")
  , memoize        = require("memoizee/weak-plain")
  , ensureDocument = require("../valid-html-document");

var getHtmlToDom = memoize(function (document) {
	var el = document.createElement("div"), df;
	return function (html) {
		el.innerHTML = html;
		switch (el.childNodes.length) {
			case 0:
				return null;
			case 1:
				return el.firstChild;
			default:
		}
		df = document.createDocumentFragment();
		while (el.firstChild) df.appendChild(el.firstChild);
		return df;
	};
});

module.exports = function (html) {
	return getHtmlToDom(ensureDocument(this))(value(html));
};
