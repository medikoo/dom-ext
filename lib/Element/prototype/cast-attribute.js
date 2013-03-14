'use strict';

var isCallable = require('es5-ext/lib/Object/is-callable')
  , isAttr     = require('../../Attr/is-attr')
  , element    = require('../valid-element');

module.exports = function (name, value) {
	element(this);
	if (value == null) {
		this.removeAttribute(name);
		this[name] = null;
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
			this.removeAttribute(name);
			this[name] = false;
		}
	} else if (isAttr(value)) {
		this.setAttributeNode(value);
	} else if (isCallable(value.toDOMAttr)) {
		this.setAttributeNode(value.toDOMAttr(this.ownerDocument, name));
	} else {
		this.setAttribute(name, value);
	}
};