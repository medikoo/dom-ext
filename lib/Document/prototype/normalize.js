'use strict';

var toArray    = require('es5-ext/lib/Array/from')
  , flatten    = require('es5-ext/lib/Array/prototype/flatten')
  , isCallable = require('es5-ext/lib/Object/is-callable')
  , isList     = require('es5-ext/lib/Object/is-list')
  , isObject   = require('es5-ext/lib/Object/is-object')
  , isNode     = require('../../Node/is-node')
  , document    = require('../valid-document')

  , map = Array.prototype.map;

var normalize = function self(child) {
	if (child == null) return null;
	if (isNode(child)) return child;
	if (isObject(child)) {
		if (child.toDOM && isCallable(child.toDOM)) return child.toDOM(this);
		else if (isList(child)) return toArray(child).map(self, this);
	}
	return this.createTextNode(String(child));
};

module.exports = function self(child/*, …childn*/) {
	return flatten.call(map.call(arguments, normalize, document(this)));
};
