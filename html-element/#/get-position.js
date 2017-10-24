"use strict";

var element = require("../valid-html-element");

module.exports = function () {
	var data = element(this).getBoundingClientRect()
	  , body = this.ownerDocument.body, html = this.ownerDocument.documentElement;

	return {
		left: (html.scrollLeft || body.scrollLeft) + data.left,
		top: (html.scrollTop || body.scrollTop) + data.top
	};
};
