'use strict';

var getCookie = require('../../../lib/HTMLDocument/prototype/get-cookie');

module.exports = function (t, a) {
	if ((typeof document === 'undefined') || (document.cookie === undefined)) {
		return;
	}

	document.cookie = '';
	a(getCookie.call(document, 'foo'), null, "Pre");
	t.call(document, 'foo', 'bar');
	a(getCookie.call(document, 'foo'), 'bar', "Post");
};
