"use strict";

var randomUniq = require("es5-ext/string/random-uniq")
  , toIdString = require("./to-id-string");

var generateFromName = (function () {
	var done = Object.create(null);
	return function (name) {
		var count;
		name = toIdString(name);
		if (done[name]) {
			count = 2;
			while (done[name + "-" + count]) ++count;
			name = name + "-" + count;
		}
		done[name] = true;
		return name;
	};
}());

module.exports = function (name) {
	return generateFromName(name || ("i" + randomUniq()));
};
