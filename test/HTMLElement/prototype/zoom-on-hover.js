'use strict';

module.exports = function (t, a) {
	var el;

	if (typeof document === 'undefined') return;
	if (document.body == null) return;
	if (typeof document.body.offsetWidth !== 'number') return;

	el = document.createElement('p');
	el.appendChild(document.createElement('div'));

	a(t.call(el, { width: 1000, height: 1000 }), el);
};
