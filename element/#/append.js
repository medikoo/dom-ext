"use strict";

var element        = require("../valid-element")
  , mutationMethod = require("./_mutation-method");

module.exports = function (nodeIgnored/*, …nodes*/) {
	element(this).appendChild(mutationMethod(this.ownerDocument, arguments));
};
