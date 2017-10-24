"use strict";

var element = require("../valid-html-element");

module.exports = function () {
	return { width: element(this).offsetWidth, height: this.offsetHeight };
};
