'use strict';

var isDocument = require('./is-document');

module.exports = function (x) {
	if (!isDocument(x)) {
		throw new TypeError(x + " is not a DOM Document");
	}
	return x;
};
