"use strict";

var element        = require("../valid-element")
  , mutationMethod = require("./_mutation-method");

module.exports = function (nodeIgnored/*, …nodes*/) {
	element(this).insertBefore(mutationMethod(this.ownerDocument, arguments), this.firstChild);
};
