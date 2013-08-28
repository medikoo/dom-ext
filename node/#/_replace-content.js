'use strict';

var normalize = require('../../document/#/normalize')
  , isDF      = require('../../document-fragment/is-document-fragment');

module.exports = function (child/*, …child*/) {
	var oldNodes = this.childNodes, dom, nu, i = 0, old;
	dom = normalize.apply(this.ownerDocument, arguments);

	if (isDF(dom)) {
		while ((nu = dom.firstChild)) {
			old = oldNodes[i++];
			if (old !== nu) {
				if (old) this.replaceChild(nu, old);
				else this.appendChild(nu);
			}
		}
	} else if (dom) {
		old = oldNodes[i++];
		if (old !== dom) {
			if (old) this.replaceChild(dom, old);
			else this.appendChild(dom);
		}
	}
	while (oldNodes.length > i) this.removeChild(oldNodes[i]);
	return this;
};
