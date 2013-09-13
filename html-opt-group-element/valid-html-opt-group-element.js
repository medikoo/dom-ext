'use strict';

var isElement = require('./is-html-opt-group-element');

module.exports = function (x) {
	if (!isElement(x)) throw new TypeError(x + " is not a HTMLOptGroupElement");
	return x;
};
