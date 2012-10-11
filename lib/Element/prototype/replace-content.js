'use strict';

var replaceContent = require('../../Node/prototype/_replace-content')
  , element        = require('../valid-element');

module.exports = function () {
	return replaceContent.apply(element(this), arguments);
};
