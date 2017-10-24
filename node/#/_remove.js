"use strict";

module.exports = function () {
	if (!this.parentNode) return;
	this.parentNode.removeChild(this);
};
