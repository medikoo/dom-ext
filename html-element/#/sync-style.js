'use strict';

var callable = require('es5-ext/object/valid-callable')
  , value    = require('es5-ext/object/valid-value')
  , once     = require('timers-ext/once')
  , element  = require('../valid-html-element')

  , observerConfig = { attributes: true, childList: true, subtree: true };

module.exports = function (source, propertyName/*, isApplicable*/) {
	var update, computedStyle, sourceWindow, target, mutationObserver, interval
	  , initial, isApplicable = arguments[2];

	target = element(this);
	element(source);
	propertyName = String(value(propertyName));
	if (isApplicable !== undefined) callable(isApplicable);
	sourceWindow = source.ownerDocument.defaultView;
	computedStyle = sourceWindow.getComputedStyle(source);
	initial = target.style[propertyName];
	update = once(function () {
		target.style[propertyName] = (isApplicable && !isApplicable())
			? initial : computedStyle[propertyName];
	});

	// on resize
	sourceWindow.addEventListener('resize', update, false);

	// on DOM mutation
	if (typeof MutationObserver === 'function') {
		mutationObserver = new MutationObserver(update);
		mutationObserver.observe(source, observerConfig);
	}

	// fallback
	interval = setInterval(update, 500);

	return {
		update: update,
		disconnect: function () {
			sourceWindow.removeEventListener('resize', update, false);
			if (mutationObserver) mutationObserver.disconnect();
			clearInterval(interval);
		}
	};
};
