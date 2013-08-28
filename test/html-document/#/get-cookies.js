'use strict';

var setCookie = require('../../../html-document/#/set-cookie');

module.exports = function (t, a) {
	if ((typeof document === 'undefined') || (document.cookie === undefined)) {
		return;
	}

	document.cookie = '';
	a.deep(t.call(document), {}, "Empty");
	setCookie.call(document, 'foo', 'bar');
	a.deep(t.call(document), { foo: 'bar' }, "First");
	setCookie.call(document, 'raz', 'dwa');
	a.deep(t.call(document), { foo: 'bar', raz: 'dwa' }, "Many");
};
