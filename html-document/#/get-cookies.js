"use strict";

var document = require("../valid-html-document");

module.exports = function () {
	var cookies, result;

	document(this);
	cookies = this.cookie;

	result = {};

	if (!cookies) return result;
	cookies.split(";").forEach(function (data) {
		var i = data.indexOf("="), key = decodeURIComponent(data.slice(0, i).trim());

		if (hasOwnProperty.call(result, key)) return;
		result[key] = decodeURIComponent(data.slice(i + 1).trim());
	});

	return result;
};
