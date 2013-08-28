'use strict';

var document = require('../valid-html-document');

module.exports = function (name) {
	var data, result;

	document(this);
	data = this.cookie;

	result = null;
	data.split(';').some(function (data) {
		var i = data.indexOf('=')
		  , key = decodeURIComponent(data.slice(0, i).trim());

		if (key !== name) return false;
		result = decodeURIComponent(data.slice(i + 1));
		return true;
	});

	return result;
};
