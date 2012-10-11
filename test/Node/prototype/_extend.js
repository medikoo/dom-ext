'use strict';

var toArray = require('es5-ext/lib/Array/from');

module.exports = function (t, a) {
	var el1, el2, el3, el4, fn = function () {}, node;

	if (typeof document === 'undefined') return;

	el1 = document.createElement('p');
	el2 = document.createElement('div');

	node = t.call(el2, el1, 'Test').childNodes[1];
	a(node.nodeType, 3, "String to Text node");
	a(node.data, 'Test', "String to Text node: content");
	a.deep(toArray(el2.childNodes), [el1, node],
		"Children");
};
