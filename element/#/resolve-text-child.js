"use strict";

var ensureElement = require("../valid-element");

module.exports = function () {
	var node = ensureElement(this).firstChild;
	if (node && node.nodeType === 3) return node;
	return this.insertBefore(this.ownerDocument.createTextNode(""), this.firstChild);
};
