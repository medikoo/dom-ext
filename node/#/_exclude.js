"use strict";

var d = require("d")

  , defineProperty = Object.defineProperty;

module.exports = function () {
	var text;
	if (!this.parentNode) return;
	if (!this._domExtLocation) {
		defineProperty(this, "_domExtLocation", d(this.parentNode.insertBefore(
			text = this.ownerDocument.createTextNode(""),
			this.nextSibling
		)));
		text._isDomExtLocation_ = true;
	}
	this.parentNode.removeChild(this);
};
