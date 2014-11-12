'use strict';

var element    = require('../valid-html-element')
  , randomUniq = require('time-uuid');

module.exports = function () {
	if (element(this).id) return this.id;
	return (this.id = this.nodeName.toLowerCase() + '-' + randomUniq());
};
