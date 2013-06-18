'use strict';

var normalize = require('../../Document/prototype/normalize');

module.exports = function (child/*, …child*/) {
	this.appendChild(normalize.apply(this.ownerDocument, arguments));
	return this;
};
