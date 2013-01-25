'use strict';

var isCallable    = require('es5-ext/lib/Object/is-callable')
  , element       = require('../valid-element');

module.exports = function (name, value) {
	element(this);
	if (value == null) {
		this.removeAttribute(name);
		this[name] = null;
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
	} else {
		this.setAttribute(name, value);
	}
};
