'use strict';

module.exports = function (t, a) {
	var el, invoked;
	if (typeof document === 'undefined') return;
	if (document.addEventListener == null) return;

	el = document.createElement('p');
	el.addEventListener('click', function () { invoked = true; }, false);
	t.call(el, 'click');
	a(invoked, true);
};
