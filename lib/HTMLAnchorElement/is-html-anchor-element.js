'use strict';

var isElement = require('../HTMLElement/is-html-element');

module.exports = function (anchor) {
	return Boolean(isElement(anchor) && (anchor.nodeName.toLowerCase() === 'a'));
};
