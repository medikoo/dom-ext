'use strict';

var isElement = require('./is-html-table-row-element');

module.exports = function (x) {
	if (!isElement(x)) throw new TypeError(x + " is not a HTMLTableRowElement");
	return x;
};
