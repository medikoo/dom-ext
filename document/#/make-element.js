"use strict";

var extend        = require("../../element/#/extend")
  , document      = require("../valid-document")

  , slice = Array.prototype.slice;

module.exports = function (name/*, attrs, …children*/) {
	document(this);
	return extend.apply(this.createElement(name), slice.call(arguments, 1));
};
