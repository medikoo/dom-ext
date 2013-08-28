'use strict';

var toArray    = require('es5-ext/array/from')
  , isCallable = require('es5-ext/object/is-callable')
  , isList     = require('es5-ext/object/is-list')
  , isObject   = require('es5-ext/object/is-object')
  , isAttr     = require('../../attr/is-attr')
  , isNode     = require('../../node/is-node')
  , document    = require('../valid-document')

  , forEach = Array.prototype.forEach
  , normalize;

normalize = function (child, df, document) {
	if (child == null) return;
	if (isNode(child)) {
		df.appendChild(child);
		return;
	}
	if (isAttr(child)) {
		throw new TypeError("Free pass of attribute nodes is deprecated");
	}
	if (isObject(child)) {
		if (child.toDOM && isCallable(child.toDOM)) {
			df.appendChild(child.toDOM(document));
			return;
		}
		if (isList(child)) {
			toArray(child).forEach(function (item) {
				normalize(item, df, document);
			});
			return;
		}
	}
	df.appendChild(document.createTextNode(String(child)));
};

module.exports = function self(child/*, …childn*/) {
	var df = document(this).createDocumentFragment();
	forEach.call(arguments, function (child) {
		normalize(child, df, this);
	}, this);
	return df.childNodes.length === 1 ? df.firstChild : df;
};
