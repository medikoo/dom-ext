'use strict';

var form = require('../valid-html-form-element');

module.exports = function () {
	var event = form(this).ownerDocument.createEvent('HTMLEvents');
	event.initEvent('submit', true, true);
	this.dispatchEvent(event);
	return event;
};
