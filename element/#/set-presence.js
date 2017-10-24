"use strict";

var setPresence = require("../../node/#/_set-presence")
  , element     = require("../valid-element");

module.exports = function (isPresent) {
	return setPresence.call(element(this), isPresent);
};
