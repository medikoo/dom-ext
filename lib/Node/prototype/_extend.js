'use strict';

var toArray    = require('es5-ext/lib/Array/from')
  , isCallable = require('es5-ext/lib/Object/is-callable')
  , isList     = require('es5-ext/lib/Object/is-list')
  , isObject   = require('es5-ext/lib/Object/is-object')
  , isNode     = require('../../Node/is-node')

  , forEach = Array.prototype.forEach;

module.exports = function (child/*, …children*/) {
	var document = this.ownerDocument;
	forEach.call(arguments, function self(child) {
		if (child == null) {
			return;
		} else if (isNode(child)) {
			this.appendChild(child);
		} else if (isObject(child)) {
			if (child.toDOM && isCallable(child.toDOM)) {
				this.appendChild(child.toDOM(document));
			} else if (isList(child)) {
				toArray(child).forEach(self, this);
			} else {
				self.call(this, String(child));
			}
		} else {
			this.appendChild(document.createTextNode(child));
		}
	}, this);

	return this;
};
