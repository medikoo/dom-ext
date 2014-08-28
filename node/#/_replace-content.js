'use strict';

var normalize = require('../../document/#/normalize')

  , isArray = Array.isArray;

module.exports = function (child/*, …child*/) {
	var oldNodes = this.childNodes, nuNodes, nu, i = 0, l, old;
	nuNodes = normalize.apply(this.ownerDocument, arguments);

	if (nuNodes) {
		if (isArray(nuNodes)) {
			for (i = 0, l = nuNodes.length; i < l; ++i) {
				if (nuNodes[i]._domExtLocation) {
					nuNodes.splice(i + 1, 0, nuNodes[i]._domExtLocation);
					++i;
					++l;
				}
			}
			i = 0;
		} else if (nuNodes._domExtLocation) {
			nuNodes = [nuNodes, nuNodes._domExtLocation];
		}
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
	}
	while (oldNodes.length > i) this.removeChild(oldNodes[i]);
	return this;
};
