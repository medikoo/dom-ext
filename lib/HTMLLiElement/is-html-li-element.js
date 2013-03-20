'use strict';

var isElement = require('../HTMLElement/is-html-element');

module.exports = function (el) {
	return Boolean(isElement(el) && (el.nodeName.toLowerCase() === 'li'));
};
