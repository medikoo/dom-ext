'use strict';

var isCallable  = require('es5-ext/object/is-callable')
  , isArrayLike = require('es5-ext/object/is-array-like')
  , isObject    = require('es5-ext/object/is-object')
  , isString    = require('es5-ext/string/is-string')
  , isIterable  = require('es6-iterator/is-iterable')
  , forOf       = require('es6-iterator/for-of')
  , isAttr      = require('../../attr/is-attr')
  , isNode      = require('../../node/is-node')
  , document    = require('../valid-document')

  , isArray = Array.isArray, forEach = Array.prototype.forEach, singular = null, multi = null
  , normalize, processItem;

processItem = function (item) {
	var result = normalize(item, this);
	if (!result) return;
	if (isArray(result)) {
		if (singular) {
			result.unshift(singular);
			singular = null;
		}
		multi = result;
	} else if (isArray(multi)) {
		multi.push(result);
	} else if (singular) {
		multi = [singular, result];
		singular = null;
	} else {
		singular = result;
	}
};

normalize = function (child, document) {
	if (child == null) return null;
	if (isNode(child)) return child;
	if (isAttr(child)) throw new TypeError("Free pass of attribute nodes is not supported");
	if (isObject(child)) {
		if (child.toDOM && isCallable(child.toDOM)) return child.toDOM(document);
		if (isIterable(child)) {
			if (child.forEach) {
				child.forEach(processItem, document);
				return multi || singular || null;
			}
			if (!isString(child)) {
				forOf(child, processItem);
				return multi || singular || null;
			}
		} else if (isArrayLike(child)) {
			forEach.call(child, processItem);
			return multi || singular || null;
		}
	}
	return document.createTextNode(String(child));
};

module.exports = function self(child/*, …childn*/) {
	var result, cacheMulti = multi, cacheSingular = singular;
	multi = singular = null;
	forEach.call(arguments, processItem, document(this));
	result = multi || singular || null;
	multi = cacheMulti;
	singular = cacheSingular;
	return result;
};
