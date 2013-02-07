'use strict';

var normalize = require('../../Document/prototype/normalize');

module.exports = function (nuNodes) {
	var oldNodes = this.childNodes, length;
	nuNodes = normalize.apply(this.ownerDocument, arguments);
	nuNodes.forEach(function (nu, i) {
		var old = oldNodes[i];
		if (old !== nu) {
			if (old) this.replaceChild(nu, old);
			else this.appendChild(nu);
		}
	}, this);
	length = nuNodes.length;
	while (oldNodes.length > length) this.removeChild(oldNodes[length]);
	return this;
};
