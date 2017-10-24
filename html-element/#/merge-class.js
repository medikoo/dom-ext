"use strict";

var uniq     = require("es5-ext/array/#/uniq")
  , element  = require("../valid-html-element")

  , re = /\s+/g;

module.exports = function (nu) {
	var current = element(this).className.trim();
	current = current ? current.split(re) : [];
	nu = String(nu).trim();
	nu = nu ? nu.split(re) : [];
	this.className = uniq.call(current.concat(nu)).join(" ");
	return this;
};
