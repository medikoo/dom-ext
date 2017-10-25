"use strict";

var element        = require("../valid-element")
  , mutationMethod = require("./_mutation-method");

module.exports = function (nodeIgnored/*, …nodes*/) {
	var parent = element(this).parentNode;
	if (!parent) return;
	parent.insertBefore(mutationMethod(this.ownerDocument, arguments), this.nextSibling);
};
