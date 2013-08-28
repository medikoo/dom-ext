'use strict';

var isElement = require('./is-html-element');

module.exports = function (x) {
	if (!isElement(x)) throw new TypeError(x + " is not a HTMLElement");
	return x;
};
