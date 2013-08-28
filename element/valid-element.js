'use strict';

var isElement = require('./is-element');

module.exports = function (x) {
	if (!isElement(x)) {
		throw new TypeError(x + " is not a DOM Element");
	}
	return x;
};
