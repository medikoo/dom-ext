'use strict';

var document;

try {
	document = new (require('jsdom').JSDOM)().window.document;
} catch (ignore) {
	console.log(ignore);
}

exports.context = document ? {
	document: document,
	setTimeout: setTimeout,
	clearTimeout: clearTimeout,
	setInterval: setInterval,
	clearInterval: clearInterval
} : {};
