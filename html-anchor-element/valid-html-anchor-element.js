'use strict';

var isAnchor = require('./is-html-anchor-element');

module.exports = function (x) {
	if (!isAnchor(x)) throw new TypeError(x + " is not a HTMLAnchorElement");
	return x;
};
