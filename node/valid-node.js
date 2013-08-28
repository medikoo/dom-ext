'use strict';

var isNode = require('./is-node');

module.exports = function (x) {
	if (!isNode(x)) throw new TypeError(x + " is not a DOM node");
	return x;
};
