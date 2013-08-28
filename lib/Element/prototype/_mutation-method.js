'use strict';

var isString = require('es5-ext/string/is-string')

  , forEach = Array.prototype.forEach;

module.exports = function (document, args) {
	var node;
	if (args.length > 1) {
		node = document.createDocumentFragment();
		forEach.call(args, function (node) {
			if (isString(node)) node = document.createTextNode(node);
			this.appendChild(node);
		}, node);
		return node;
	}
	node = args[0];
	if (isString(node)) return document.createTextNode(node);
	return node;
};
