'use strict';

var callable = require('es5-ext/object/valid-callable')
  , filter   = Array.prototype.filter;

module.exports = function (controlsFilter) {
	if (controlsFilter != null) callable(controlsFilter);
	return filter.call(this.querySelectorAll('input, textarea, select, button'),
		function (control) {
			if (controlsFilter && !controlsFilter(control)) return false;
			if (control.disabled) return false;
			control.disabled = true;
			control.setAttribute('disabled', 'disabled');
			return true;
		});
};
