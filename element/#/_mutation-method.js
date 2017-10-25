"use strict";

var isString = require("es5-ext/string/is-string");

var forEach = Array.prototype.forEach;

module.exports = function (document, args) {
	var node;
	if (args.length > 1) {
		node = document.createDocumentFragment();
		forEach.call(
			args,
			function (nodeArg) {
				if (isString(nodeArg)) nodeArg = document.createTextNode(nodeArg);
				this.appendChild(nodeArg);
			},
			node
		);
		return node;
	}
	node = args[0];
	if (isString(node)) return document.createTextNode(node);
	return node;
};
