"use strict";

var extend           = require("../../node/#/_extend")
  , documentFragment = require("../valid-document-fragment");

module.exports = function (childIgnored/*, …children*/) {
	documentFragment(this);
	return extend.apply(this, arguments);
};
