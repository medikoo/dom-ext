"use strict";

var callable = require("es5-ext/object/valid-callable")
  , value    = require("es5-ext/object/valid-value")
  , once     = require("timers-ext/once")
  , element  = require("../valid-html-element");

var observerConfig = { attributes: true, childList: true, subtree: true };

module.exports = function (source, propertyName/*, isApplicable*/) {
	var update, sourceWindow, target, mutationObserver, interval, isApplicable = arguments[2];

	target = element(this);
	element(source);
	propertyName = String(value(propertyName));
	if (isApplicable !== undefined) callable(isApplicable);
	sourceWindow = source.ownerDocument.defaultView;
	update = once(function () {
		if (isApplicable && !isApplicable()) return;
		target.style[propertyName] = sourceWindow.getComputedStyle(source)[propertyName];
	});

	// On resize
	sourceWindow.addEventListener("resize", update, false);

	// On DOM mutation
	if (typeof MutationObserver === "function") {
		mutationObserver = new MutationObserver(update);
		mutationObserver.observe(source, observerConfig);
	}

	// Fallback
	interval = setInterval(update, 500);

	return {
		update: update,
		disconnect: function () {
			sourceWindow.removeEventListener("resize", update, false);
			if (mutationObserver) mutationObserver.disconnect();
			clearInterval(interval);
		}
	};
};
