'use strict';

var isDocument = require('../Document/is-document')
  , isElement  = require('../Element/is-element');

module.exports = function (document) {
	return isDocument(document) && isElement(document.head);
};
