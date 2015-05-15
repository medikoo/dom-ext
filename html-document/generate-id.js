'use strict';

var startsWith = require('es5-ext/string/#/starts-with')
  , endsWith   = require('es5-ext/string/#/ends-with')
  , randomUniq = require('es5-ext/string/random-uniq')
  , nonAsciiRe = /[\0-\/:-@\[-`{-\uffff]/g
  , dashRe     = /-{2,}/g;

var generateFromName = (function () {
	var done = Object.create(null);
	return function (name) {
		var count;
		name = String(name).toLowerCase().trim().replace(nonAsciiRe, '-').replace(dashRe, '-');
		if (startsWith.call(name, '-')) name = name.slice(1);
		if (endsWith.call(name, '-')) name = name.slice(0, -1);
		if (!name) name = 'x';
		if (done[name]) {
			count = 2;
			while (done[name + '-' + count]) ++count;
			name = name + '-' + count;
		}
		done[name] = true;
		return name;
	};
}());

module.exports = function (name) {
	return generateFromName(name || ('i' + randomUniq()));
};
