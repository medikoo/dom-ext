'use strict';

var value           = require('es5-ext/object/valid-value')
  , once            = require('timers-ext/once')
  , element         = require('../valid-html-element')

  , observerConfig = { attributes: true, childList: true, subtree: true };

module.exports = function (source, propertyName) {
	var update, computedStyle, sourceWindow, target, mutationObserver, interval;

	target = element(this);
	element(source);
	propertyName = String(value(propertyName));
	sourceWindow = source.ownerDocument.defaultView;
	computedStyle = sourceWindow.getComputedStyle(source);
	update = once(function () { target.style[propertyName] = computedStyle[propertyName]; });

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
		disconnect: function () {
			sourceWindow.removeEventListener('resize', update, false);
			if (mutationObserver) mutationObserver.disconnect();
			clearInterval(interval);
		}
	};
};
