'use strict';

var forEach       = require('es5-ext/lib/Object/for-each')
  , isCallable    = require('es5-ext/lib/Object/is-callable')
  , isPlainObject = require('es5-ext/lib/Object/is-plain-object')
  , extend        = require('../../Node/prototype/_extend')
  , element       = require('../valid-element')

  , slice = Array.prototype.slice;

module.exports = function (attrs/*, …children*/) {
	var children;

	element(this);
	attrs = arguments[0];
	if (isPlainObject(attrs)) {
		forEach(attrs, function (value, name) {
			if (value == null) {
				this.removeAttribute(name);
				delete this[name];
			} else if (isCallable(value)) {
				this.setAttribute(name, name);
				this[name] = value;
			} else if (typeof value === 'boolean') {
				if (value) {
					this.setAttribute(name, name);
				} else {
					this.removeAttribute(name);
					delete this[name];
				}
			} else {
				this.setAttribute(name, value);
			}
		}, this);
		children = slice.call(arguments, 1);
	} else {
		children = arguments;
	}

	return extend.apply(this, children);
};
