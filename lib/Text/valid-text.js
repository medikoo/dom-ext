'use strict';

var isText = require('./is-text');

module.exports = function (x) {
	if (!isText(x)) throw new TypeError(x + " is not a DOM Text node");
	return x;
};
