'use strict';

var normalize = require('../../document/#/normalize')

  , isArray = Array.isArray;

module.exports = function (child/*, …child*/) {
	var oldNodes = this.childNodes, nuNodes, nu, i = 0, old;
	nuNodes = normalize.apply(this.ownerDocument, arguments);

	if (isArray(nuNodes)) {
		while ((nu = nuNodes.shift())) {
			old = oldNodes[i++];
			if (old !== nu) {
				if (old) this.replaceChild(nu, old);
				else this.appendChild(nu);
			}
		}
	} else if (nuNodes) {
		old = oldNodes[i++];
		if (old !== nuNodes) {
			if (old) this.replaceChild(nuNodes, old);
			else this.appendChild(nuNodes);
		}
	}
	while (oldNodes.length > i) this.removeChild(oldNodes[i]);
	return this;
};
