// Returns generator that generates unique ids on basis of input strings

"use strict";

var toId = require("./to-id-string");

module.exports = function () {
	var taken = Object.create(null);

	return function (name) {
		var count = 2, baseName = toId(name);
		name = baseName;
		while (taken[name]) name = baseName + "-" + count++;
		taken[name] = true;
		return name;
	};
};
