'use strict';

var clear   = require('../../Node/prototype/_clear')
  , element = require('../valid-element');

module.exports = function () {
	return clear.apply(element(this), arguments);
};
