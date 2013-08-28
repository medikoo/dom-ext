'use strict';

var normalize = require('../../document/#/normalize');

module.exports = function (child/*, …child*/) {
	this.appendChild(normalize.apply(this.ownerDocument, arguments));
	return this;
};
