'use strict';

var isElement = require('../Element/is-element');

module.exports = function (image) {
	return Boolean(isElement(image) && (image.nodeName.toLowerCase() === 'img') &&
		(image.width !== undefined));
};
