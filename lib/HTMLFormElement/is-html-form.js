'use strict';

var isList    = require('es5-ext/lib/Object/is-list')
  , isElement = require('../Element/is-element');

module.exports = function (form) {
	return Boolean(isElement(form) && (form.nodeName.toLowerCase() === 'form') &&
		isList(form.elements) && form.reset && form.submit);
};
