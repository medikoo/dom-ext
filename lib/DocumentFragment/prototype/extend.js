'use strict';

var extend           = require('../../Node/prototype/_extend')
  , documentFragment = require('../valid-document-fragment');

module.exports = function (child/*, …children*/) {
	documentFragment(this);
	return extend.apply(this, arguments);
};
