"use strict";

module.exports = function () {
	var child;
	while ((child = this.lastChild)) this.removeChild(child);
	return this;
};
