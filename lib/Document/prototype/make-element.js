'use strict';

var oForEach      = require('es5-ext/lib/Object/for-each')
  , isCallable    = require('es5-ext/lib/Object/is-callable')
  , isList        = require('es5-ext/lib/Object/is-list')
  , isObject      = require('es5-ext/lib/Object/is-object')
  , isPlainObject = require('es5-ext/lib/Object/is-plain-object')
  , isNode        = require('../../Node/is-node')
  , document      = require('../valid-document')

  , forEach = Array.prototype.forEach, slice = Array.prototype.slice;

module.exports = function (name/*, attrs, …children*/) {
	var attrs, children, el;

	document(this);
	attrs = arguments[1];
	if (isPlainObject(attrs)) {
		children = slice.call(arguments, 2);
	} else {
		attrs = null;
		children = slice.call(arguments, 1);
	}

	el = this.createElement(name);
	if (attrs) {
		oForEach(attrs, function (value, name) {
			if (isCallable(value)) {
				el.setAttribute(name, name);
				el[name] = value;
			} else {
				el.setAttribute(name, value);
			}
		});
	}

	children.forEach(function self(child) {
		if (child == null) {
			return;
		} else if (isNode(child)) {
			el.appendChild(child);
		} else if (isObject(child)) {
			if (child.toDOM && isCallable(child.toDOM)) {
				el.appendChild(child.toDOM(this));
			} else if (isList(child)) {
				forEach.call(child, self, this);
			} else {
				self.call(this, isCallable(child) ? child() : String(child));
			}
		} else {
			el.appendChild(this.createTextNode(child));
		}
	}, this);

	return el;
};
