'use strict';

var isCallable = require('es5-ext/object/is-callable')
  , isAttr     = require('../../attr/is-attr')
  , element    = require('../valid-element');

module.exports = function (name, value) {
	element(this);
	if (value == null) {
		this[name] = null;
		this.removeAttribute(name);
	} else if (typeof value === 'string') {
		this.setAttribute(name, value);
	} else if (isCallable(value)) {
		this.setAttribute(name, name);
		this[name] = value;
	} else if (typeof value === 'boolean') {
		if (value) {
			this.setAttribute(name, name);
			this[name] = true;
		} else {
			this[name] = false;
			this.removeAttribute(name);
		}
	} else if (isCallable(value.toDOMAttr)) {
		value.toDOMAttr(this, name);
	} else if (isAttr(value)) {
		// Deprecated
		this.setAttributeNode(value);
	} else {
		this.setAttribute(name, value);
	}
};
