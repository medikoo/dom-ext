'use strict';

var document;

try {
	document = new (require('jsdom').JSDOM)().window.document;
} catch (ignore) {}

exports.context = { setTimeout: setTimeout };
if (document) exports.context.document = document;
