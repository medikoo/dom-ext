'use strict';

var isPlainObject  = require('es5-ext/object/is-plain-object')
  , extend         = require('../../Node/prototype/_extend')
  , element        = require('../valid-element')
  , castAttributes = require('./cast-attributes')

  , slice = Array.prototype.slice;

module.exports = function (attrs/*, …children*/) {
	var children;

	element(this);
	attrs = arguments[0];
	if (isPlainObject(attrs) && (typeof attrs.toDOM !== 'function')) {
		castAttributes.call(this, attrs);
		children = slice.call(arguments, 1);
	} else {
		children = arguments;
	}

	return extend.apply(this, children);
};
