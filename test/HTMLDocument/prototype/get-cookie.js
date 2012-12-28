'use strict';

var setCookie = require('../../../lib/HTMLDocument/prototype/set-cookie');

module.exports = function (t, a) {
	if ((typeof document === 'undefined') || (document.cookie === undefined)) {
		return;
	}

	a(t.call(document, 'foo2'), null, "Non existing");
	setCookie.call(document, 'foo2', 'bar');
	a(t.call(document, 'foo2'), 'bar', "Existing");
};
