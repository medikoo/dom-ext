'use strict';

var toArray = require('es5-ext/lib/Array/from');

module.exports = function (t, a) {
	var el, prechild, child, text;
	if (typeof document === 'undefined') return;

	el = document.createElement('p');
	prechild = el.appendChild(document.createElement('span'));

	t.call(el, 'raz', child = document.createElement('span'));
	text = el.childNodes[0];
	a(text.nodeType, 3, "String: Type");
	a.deep(toArray(el.childNodes), [text, child, prechild]);
};
