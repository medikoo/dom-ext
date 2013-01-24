'use strict';

var d = require('es5-ext/lib/Object/descriptor')

  , defineProperty = Object.defineProperty;

module.exports = function () {
	if (!this.parentNode) return;
	if (!this._domExtLocation) {
		defineProperty(this, '_domExtLocation', d(this.parentNode.insertBefore(
			this.ownerDocument.createTextNode(''),
			this.nextSibling
		)));
	}
	this.parentNode.removeChild(this);
};
