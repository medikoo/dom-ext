'use strict';

var document = require('../valid-html-document');

module.exports = function () {
	var data, result;

	document(this);
	data = this.cookie;

	result = {};

	if (!data) return result;
	data.split(';').forEach(function (data) {
		var i = data.indexOf('=')
		  , key = decodeURIComponent(data.slice(0, i).trim());

		if (result.hasOwnProperty(key)) return;
		result[key] = decodeURIComponent(data.slice(i + 1).trim());
	});

	return result;
};
