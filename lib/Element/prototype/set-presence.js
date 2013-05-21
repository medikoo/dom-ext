'use strict';

var setPresence = require('../../Node/prototype/_set-presence')
  , element     = require('../valid-element');

module.exports = function (isPresent) {
	return setPresence.call(element(this), isPresent);
};
