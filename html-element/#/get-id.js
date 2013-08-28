'use strict';

var element  = require('../valid-html-element')
  , randomId = require('time-uuid');

module.exports = function () {
	if (element(this).id) return this.id;
	return (this.id = this.nodeName.toLowerCase() + '-' + randomId());
};
