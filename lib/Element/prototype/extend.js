'use strict';

var oForEach      = require('es5-ext/lib/Object/for-each')
  , isCallable    = require('es5-ext/lib/Object/is-callable')
  , isList        = require('es5-ext/lib/Object/is-list')
  , isObject      = require('es5-ext/lib/Object/is-object')
  , isPlainObject = require('es5-ext/lib/Object/is-plain-object')
  , isNode        = require('../../Node/is-node')
  , element       = require('../valid-element')

  , forEach = Array.prototype.forEach, slice = Array.prototype.slice;

module.exports = function (attrs/*, …children*/) {
	var children, document;

	element(this);
	attrs = arguments[0];
	if (isPlainObject(attrs)) {
		oForEach(attrs, function (value, name) {
			if (isCallable(value)) {
				this.setAttribute(name, name);
				this[name] = value;
			} else {
				this.setAttribute(name, value);
			}
		}, this);
		children = slice.call(arguments, 1);
	} else {
		children = arguments;
	}

	document = this.ownerDocument;
	forEach.call(children, function self(child) {
		if (child == null) {
			return;
		} else if (isNode(child)) {
			this.appendChild(child);
		} else if (isObject(child)) {
			if (child.toDOM && isCallable(child.toDOM)) {
				this.appendChild(child.toDOM(this));
			} else if (isList(child)) {
				forEach.call(child, self, this);
			} else {
				self.call(this, String(child));
			}
		} else {
			this.appendChild(document.createTextNode(child));
		}
	}, this);

	return this;
};
