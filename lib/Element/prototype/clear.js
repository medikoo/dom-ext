'use strict';

var clear   = require('../../Node/prototype/_clear')
  , element = require('../valid-element');

module.exports = function () {
	element(this);
	return clear.apply(this, arguments);
};
