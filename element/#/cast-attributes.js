"use strict";

var forEach       = require("es5-ext/object/for-each")
  , element       = require("../valid-element")
  , castAttribute = require("./cast-attribute");

module.exports = function (attrs) {
	element(this);
	forEach(attrs, function (value, name) {
		castAttribute.call(this, name, value);
	}, this);
	return this;
};
