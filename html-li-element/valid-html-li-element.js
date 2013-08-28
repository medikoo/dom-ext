'use strict';

var isElement = require('./is-html-li-element');

module.exports = function (x) {
	if (!isElement(x)) throw new TypeError(x + " is not a HTMLLiElement");
	return x;
};
