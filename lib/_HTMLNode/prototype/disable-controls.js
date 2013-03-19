'use strict';

var filter = Array.prototype.filter;

module.exports = function () {
	return filter.call(this.querySelectorAll('input, textarea, select, button'),
		function (control) {
			if (control.getAttribute('disabled')) return false;
			control.setAttribute('disabled', 'disabled');
			control.disabled = true;
			return true;
		});
};
