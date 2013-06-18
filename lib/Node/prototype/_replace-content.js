'use strict';

var normalize = require('../../Document/prototype/normalize');

module.exports = function (child/*, …child*/) {
	var oldNodes = this.childNodes, length, df, nu, i = 0, old;
	df = normalize.apply(this.ownerDocument, arguments);
	while ((nu = df.firstChild)) {
		old = oldNodes[i++];
		if (old !== nu) {
			if (old) this.replaceChild(nu, old);
			else this.appendChild(nu);
		}
	}
	while (oldNodes.length > i) this.removeChild(oldNodes[length]);
	return this;
};
