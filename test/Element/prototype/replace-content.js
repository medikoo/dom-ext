'use strict';

var toArray = require('es5-ext/lib/Array/from');

module.exports = function (t, a) {
	var el1, els;
	if (typeof document === 'undefined') return;

	el1 = document.createElement('p');
	el1.appendChild(document.createElement('span'));
	el1.appendChild(document.createElement('span'));

	els = [document.createElement('b'), document.createElement('b')];

	a(t.apply(el1, els), el1, "Return");
	a.deep(toArray(el1.childNodes), els, "Content");
};
