"use strict";

var isDocument = require("../document/is-document")
  , isElement  = require("../element/is-element");

module.exports = function (document) {
	return isDocument(document) && isElement(document.head);
};
