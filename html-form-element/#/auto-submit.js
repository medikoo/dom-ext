"use strict";

var callable      = require("es5-ext/object/valid-callable")
  , isValue       = require("es5-ext/object/is-value")
  , dispatchEvent = require("../../html-element/#/dispatch-event-2")
  , valid         = require("../valid-html-form-element");

module.exports = function (filter) {
	valid(this);
	if (isValue(filter)) callable(filter);
	this.addEventListener("change", function (e) {
		if (filter && !filter(e)) return;
		setTimeout(dispatchEvent.bind(this, "submit"), 0);
	});
};
