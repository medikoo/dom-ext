'use strict';

var document;

try {
	document = require('jsdom').jsdom();
} catch (ignore) {}

exports.context = { setTimeout: setTimeout };
if (document) exports.context.document = document;
