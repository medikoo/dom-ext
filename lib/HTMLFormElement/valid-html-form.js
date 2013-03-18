'use strict';

var isForm = require('./is-html-form');

module.exports = function (x) {
	if (!isForm(x)) throw new TypeError(x + " is not a HTMLForm");
	return x;
};
