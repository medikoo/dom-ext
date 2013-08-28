'use strict';

var element        = require('../valid-element')
  , mutationMethod = require('./_mutation-method');

module.exports = function (node/*, …nodes*/) {
	element(this).appendChild(mutationMethod(this.ownerDocument, arguments));
};
