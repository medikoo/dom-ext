"use strict";

var include = require("./_include")
  , exclude = require("./_exclude");

module.exports = function (isPresent) {
	if (isPresent) include.call(this);
	else exclude.call(this);
};
