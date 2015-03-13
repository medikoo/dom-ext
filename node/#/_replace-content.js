'use strict';

var normalize = require('../../document/#/normalize')

  , isArray = Array.isArray;

module.exports = function (child/*, …child*/) {
	var nodes = this.childNodes, nuNodes, nu, i = 0, old;
	nuNodes = normalize.apply(this.ownerDocument, arguments);

	if (isArray(nuNodes)) {
		while ((nu = nuNodes.shift())) {
			old = nodes[i++];
			if (old !== nu) {
				if (old) this.replaceChild(nu, old);
				else this.appendChild(nu);
			}
		}
	} else if (nuNodes) {
		old = nodes[i++];
		if (old !== nuNodes) {
			if (old) this.replaceChild(nuNodes, old);
			else this.appendChild(nuNodes);
		}
	}
	while (nodes.length > i) this.removeChild(nodes[i]);
	return this;
};
