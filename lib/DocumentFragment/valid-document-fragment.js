'use strict';

var isDocumentFragment = require('./is-document-fragment');

module.exports = function (x) {
	if (!isDocumentFragment(x)) {
		throw new TypeError(x + " is not a DOM DocumentFragment");
	}
	return x;
};
