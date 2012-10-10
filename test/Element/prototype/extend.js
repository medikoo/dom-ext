'use strict';

var toArray = require('es5-ext/lib/Array/from');

module.exports = function (t, a) {
	var el1, el2, el3, el4, fn = function () {}, node;

	if (typeof document === 'undefined') return;

	el1 = document.createElement('p');
	el2 = document.createElement('div');
	el2 = t.call(el2, { 'class': 'test', onclick: fn });

	a(el2.childNodes.length, 0, "With attrs: Children");
	a(el2.getAttribute('class'), 'test', "With attrs: Attribute");
	a(el2.onclick, fn, "With attrs: Listener attribute");

	el3 = document.createElement('form');
	t.call(el3, el1, el2);
	a(el3.nodeName, 'form', "With children: NodeName");
	a(el3.nodeType, 1, "With children: NodeType");
	a.deep(toArray(el3.childNodes), [el1, el2],
		"With children: Children");

	el4 = document.createElement('section');
	el4 = t.call(el4, { 'class': 'bar' }, el3, el2);
	a(el4.nodeName, 'section', "With attrs & children: NodeName");
	a(el4.nodeType, 1, "With attrs & children: NodeType");
	a(el4.getAttribute('class'), 'bar', "With attrs & children: Attribute");
	a.deep(toArray(el4.childNodes), [el3, el2],
		"With attrs & children: Children");

	node = t.call(document.createElement('div'), el2, 'Test').childNodes[1];
	a(node.nodeType, 3, "String to Text node");
	a(node.data, 'Test', "String to Text node: content");

	node = t.call(document.createElement('div'), 'String').childNodes[0];
	a(node.data, 'String', "String to Text node (no attrs)");
};
