"use strict";

var isArrayLike        = require("es5-ext/object/is-array-like")
  , isObject           = require("es5-ext/object/is-object")
  , isString           = require("es5-ext/string/is-string")
  , isIterable         = require("es6-iterator/is-iterable")
  , forOf              = require("es6-iterator/for-of")
  , isDocumentFragment = require("../../document-fragment/is-document-fragment")
  , isAttr             = require("../../attr/is-attr")
  , isNode             = require("../../node/is-node")
  , document           = require("../valid-document")

  , forEach = Array.prototype.forEach, singular = null, multi = null;

var normalizeItem = function (node) {
	var index;
	if (multi) {
		index = multi.indexOf(node);
		if (index !== -1) multi.splice(index, 1);
		multi.push(node);
		return;
	}
	if (singular) {
		if (singular === node) return;
		multi = [singular, node];
		singular = null;
		return;
	}
	singular = node;
};

var normalize = function (child) {
	if (child == null) return;
	if (!isNode(child)) {
		if (isAttr(child)) throw new TypeError("Free pass of attribute nodes is not supported");
		if (typeof child.toDOM === "function") {
			normalizeItem(child);
			return;
		}
		if (isObject(child)) {
			if (isIterable(child)) {
				if (child.forEach) {
					child.forEach(normalize, this);
					return;
				}
				if (!isString(child)) {
					forOf(child, normalize, this);
					return;
				}
			} else if (isArrayLike(child)) {
				forEach.call(child, normalize, this);
				return;
			}
		}
	} else if (isDocumentFragment(child)) {
		forEach.call(child.childNodes, normalizeItem);
		return;
	}
	normalizeItem(child);
};

module.exports = function self(child/*, …childn*/) {
	var result, cacheMulti = multi, cacheSingular = singular;
	multi = singular = null;
	forEach.call(arguments, normalize, document(this));
	result = multi || singular || null;
	multi = cacheMulti;
	singular = cacheSingular;
	return result;
};
