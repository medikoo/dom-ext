'use strict';

var normalize = require('../../Document/prototype/normalize')
  , isAttr    = require('../../Attr/is-attr');

var append = function (node) {
	if (isAttr(node)) this.setAttributeNode(node);
	else this.appendChild(node);
};

module.exports = function (child/*, …children*/) {
	normalize.apply(this.ownerDocument, arguments)
		.forEach(append, this);
	return this;
};
