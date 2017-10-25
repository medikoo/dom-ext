"use strict";

var document = require("../valid-html-document");

module.exports = function (name) {
	var cookies, result;

	document(this);
	cookies = this.cookie;

	result = null;
	cookies.split(";").some(function (cookie) {
		var i = cookie.indexOf("="), key = decodeURIComponent(cookie.slice(0, i).trim());

		if (key !== name) return false;
		result = decodeURIComponent(cookie.slice(i + 1));
		return true;
	});

	return result;
};
