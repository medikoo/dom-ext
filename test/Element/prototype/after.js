'use strict';

var toArray = require('es5-ext/lib/Array/from');

module.exports = function (t, a) {
	var parent, el, pre, post, child, text;
	if (typeof document === 'undefined') return;

	parent = document.createElement('p');
	pre = parent.appendChild(document.createElement('span'));
	el = parent.appendChild(document.createElement('span'));
	post = parent.appendChild(document.createElement('span'));

	t.call(el, 'raz', child = document.createElement('span'));
	text = parent.childNodes[2];
	a(text.nodeType, 3, "String: Type");
	a.deep(toArray(parent.childNodes), [pre, el, text, child, post]);
	a(el.childNodes.length, 0, "No self children");
};
