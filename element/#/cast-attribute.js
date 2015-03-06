'use strict';

var compact      = require('es5-ext/array/#/compact')
  , isCallable   = require('es5-ext/object/is-callable')
  , isObservable = require('observable-value/is-observable-value')
  , isAttr       = require('../../attr/is-attr')
  , element      = require('../valid-element')

  , isArray = Array.isArray, map = Array.prototype.map
  , resolveObservable = function (val) { return isObservable(val) ? val.value : val; };

var resolveArray = function (element, name, arr) {
	var onUpdate;
	arr = compact.call(arr);
	if (!arr.some(function (el) { return isObservable(el); })) {
		element.setAttribute(name, compact.call(arr).map(String).join(" "));
		return;
	}
	onUpdate = function () {
		element.setAttribute(name,
			compact.call(map.call(arr, resolveObservable)).map(String).join(" "));
	};
	arr.forEach(function (value) {
		if (isObservable(value)) value.on('change', onUpdate);
	});
	onUpdate();
};

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
	} else if (isArray(value)) {
		resolveArray(this, name, value);
	} else {
		this.setAttribute(name, value);
	}
};
