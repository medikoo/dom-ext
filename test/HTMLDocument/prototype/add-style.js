'use strict';

var last = require('es5-ext/lib/Array/prototype/last')

module.exports = function (t, a) {
	var el1, style;
	if (typeof document === 'undefined') return;

	t.call(document, 'p { color: red; }');

	style = last.call(document.childNodes[0].getElementsByTagName('style'));
	a(style.textContent.trim(), 'p { color: red; }', "String");

	t.call(document,
		{ form: { padding: '10px 10px', backgroundColor: 'olive' } });

	a((new RegExp('form\\s*{\\s*padding\\s*:\\s*10px 10px\\s*;\\s*background-'
		+ 'color\\s*:\\s*olive\\s*;\\s*}')).test(style.textContent), true,
		"Object");
};
