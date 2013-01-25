'use strict';

var forEach       = require('es5-ext/lib/Object/for-each')
  , isPlainObject = require('es5-ext/lib/Object/is-plain-object')
  , extend        = require('../../Node/prototype/_extend')
  , element       = require('../valid-element')
  , castAttribute = require('./cast-attribute')

  , slice = Array.prototype.slice;

module.exports = function (attrs/*, …children*/) {
	var children;

	element(this);
	attrs = arguments[0];
	if (isPlainObject(attrs)) {
		forEach(attrs, function (value, name) {
			castAttribute.call(this, name, value);
		}, this);
		children = slice.call(arguments, 1);
	} else {
		children = arguments;
	}

	return extend.apply(this, children);
};
