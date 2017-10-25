"use strict";

var normalize = require("../../document/#/normalize");

var isArray = Array.isArray;

module.exports = function (childIgnored/*, …child*/) {
	var result = normalize.apply(this.ownerDocument, arguments);
	if (!result) return this;
	if (isArray(result)) result.forEach(this.appendChild, this);
	else this.appendChild(result);
	return this;
};
