"use strict";

var document = require("../valid-html-document");

var now = Date.now;

module.exports = function (name, value/*, options*/) {
	var options, str, age;

	document(this);
	options = Object(arguments[2]);

	if (value === undefined) options.expires = -1;
	else value = String(value);

	if (!hasOwnProperty.call(options, "path")) options.path = "/";

	age = options.expires;
	age = !isNaN(age) && age ? new Date(now() + age * 1000) : null;

	str = encodeURIComponent(name) + "=";
	if (value) {
		str += value.replace(/[\0- ",;\\\u007f-\uffff]+/g, encodeURIComponent);
	}

	if (options.path) {
		str += ";path=" + options.path;
	}
	if (options.domain) {
		str += ";domain=" + options.domain;
	}
	if (age) {
		str += ";expires=" + age.toGMTString();
	}
	if (options.secure) {
		str += ";secure";
	}

	this.cookie = str;
};
