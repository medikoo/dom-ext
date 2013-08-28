'use strict';

var isDF = require('../../../document-fragment/is-document-fragment');

module.exports = function (t, a) {
	var el1, el2, el3, df, nodes, c1, c2;

	if (typeof document === 'undefined') return;

	el1 = document.createElement('p');
	el2 = document.createElement('div');

	df = t.call(document, el2, el1, 'Test', null);
	a(isDF(df), true, "Document fragment");
	nodes = df.childNodes;
	a(nodes[2].nodeType, 3, "String to Text node");
	a(nodes[2].data, 'Test', "String to Text node: content");
	a.deep(nodes, [el2, el1, nodes[2]], "Children");

	el3 = document.createElement('p');
	c1 = el3.appendChild(document.createElement('span'));
	c2 = el3.appendChild(document.createElement('hr'));

	a.deep(t.call(document, el2, el3.childNodes).childNodes, [el2, c1, c2],
		"Move childNodes");
};
