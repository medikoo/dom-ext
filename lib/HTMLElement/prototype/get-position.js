'use strict';

var element = require('../valid-html-element');

module.exports = function () {
	var data = element(this).getBoundingClientRect()
	  , body = this.ownerDocument.body;

	return {
		left: body.scrollLeft + data.left,
		top: body.scrollTop + data.top
	};
};
