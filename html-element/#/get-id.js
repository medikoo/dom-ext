"use strict";

var isValue    = require("es5-ext/object/is-value")
  , generateId = require("../../html-document/generate-id")
  , element    = require("../valid-html-element");

module.exports = function (name) {
	var id;
	if (element(this).id) return this.id;
	if (isValue(name)) id = generateId(name);
	else id = this.nodeName.toLowerCase() + "-" + generateId();
	return this.id = id;
};
