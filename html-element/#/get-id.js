'use strict';

var generateId = require('../../html-document/generate-id')
  , element    = require('../valid-html-element');

module.exports = function (name) {
	var id;
	if (element(this).id) return this.id;
	if (name != null) id = generateId(name);
	else id = this.nodeName.toLowerCase() + '-' + generateId();
	return (this.id = id);
};
