'use strict';

var isDocument = require('./is-html-document');

module.exports = function (x) {
	if (!isDocument(x)) {
		throw new TypeError(x + " is not a HTMLDocument");
	}
	return x;
};
