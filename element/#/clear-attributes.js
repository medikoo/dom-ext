"use strict";

var forEachRight  = require("es5-ext/array/#/for-each-right")
  , ensureElement = require("../valid-element");

module.exports = function () {
	ensureElement(this);
	forEachRight.call(this.attributes, function (attr) {
 this.removeAttribute(attr.name);
}, this);
	return this;
};
