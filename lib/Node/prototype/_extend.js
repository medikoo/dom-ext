'use strict';

var normalize  = require('../../Document/prototype/normalize');

module.exports = function (child/*, …children*/) {
	normalize.apply(this.ownerDocument, arguments)
		.forEach(this.appendChild, this);
	return this;
};
