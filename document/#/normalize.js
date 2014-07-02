'use strict';

var toArray     = require('es5-ext/array/to-array')
  , isCallable  = require('es5-ext/object/is-callable')
  , isArrayLike = require('es5-ext/object/is-array-like')
  , isObject    = require('es5-ext/object/is-object')
  , isIterable  = require('es6-iterator/is-iterable')
  , forOf       = require('es6-iterator/for-of')
  , isAttr      = require('../../attr/is-attr')
  , isNode      = require('../../node/is-node')
  , document    = require('../valid-document')

  , forEach = Array.prototype.forEach
  , normalize;

normalize = function (child, df, document) {
	if (child == null) return;
	if (isNode(child)) {
		df.appendChild(child);
		return;
	}
	if (isAttr(child)) throw new TypeError("Free pass of attribute nodes is not supported");
	if (isObject(child)) {
		if (child.toDOM && isCallable(child.toDOM)) {
			df.appendChild(child.toDOM(document));
			return;
		}
		if (isArrayLike(child)) {
			toArray(child).forEach(function (item) { normalize(item, df, document); });
			return;
		}
		if (isIterable(child)) {
			if (child.forEach) {
				child.forEach(function (item) { normalize(item, df, document); });
				return;
			}
			forOf(child, function (item) { normalize(item, df, document); });
			return;
		}
	}
	df.appendChild(document.createTextNode(String(child)));
};

module.exports = function self(child/*, …childn*/) {
	var df = document(this).createDocumentFragment();
	forEach.call(arguments, function (child) { normalize(child, df, this); }, this);
	return df.childNodes.length === 1 ? df.firstChild : df;
};
