'use strict';

var isElement = require('./is-html-option-element');

module.exports = function (x) {
	if (!isElement(x)) throw new TypeError(x + " is not a HTMLOptionElement");
	return x;
};
