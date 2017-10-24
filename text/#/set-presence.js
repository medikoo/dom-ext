"use strict";

var setPresence = require("../../node/#/_set-presence")
  , text        = require("../valid-text");

module.exports = function (isPresent) {
	return setPresence.call(text(this), isPresent);
};
