"use strict";

module.exports = function () {
	if (!this._domExtLocation) {
		if (this.parentNode) return;
		throw new Error("DOMExt error: Cannot include, location not set");
	}
	this._domExtLocation.parentNode.insertBefore(this, this._domExtLocation);
};
