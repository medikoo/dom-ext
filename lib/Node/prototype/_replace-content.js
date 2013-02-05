'use strict';

var toArray  = require('es5-ext/lib/Array/from')
  , isList   = require('es5-ext/lib/Object/is-list')
  , callable = require('es5-ext/lib/Object/valid-callable')

  , isArray = Array.isArray, forEach = Array.prototype.forEach;

module.exports = function (nuNodes) {
	var oldNodes, i;
	oldNodes = this.childNodes;
	i = 0;

	if (isList(nuNodes) && !isArray(nuNodes)) nuNodes = toArray(nuNodes);
	else callable(nuNodes.forEach);

	(nuNodes.forEach || forEach).call(nuNodes, function (nu) {
		var old = oldNodes[i];
		if (old !== nu) {
			if (old) this.replaceChild(nu, old);
			else this.appendChild(nu);
		}
		++i;
	}, this);
	while (oldNodes.length > i) this.removeChild(oldNodes[i]);
	return this;
};
