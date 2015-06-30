'use strict';

var ensureElement = require('../valid-element');

module.exports = function () {
	ensureElement(this);
	while (this.attributes[0]) this.removeAttribute(this.attributes[0].name);
	return this;
};
