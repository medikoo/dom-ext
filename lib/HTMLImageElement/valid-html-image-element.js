'use strict';

var isImage = require('./is-html-image-element');

module.exports = function (x) {
	if (!isImage(x)) throw new TypeError(x + " is not a HTMLImage");
	return x;
};
