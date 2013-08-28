'use strict';

module.exports = function (t, a) {
	if (typeof document === 'undefined') return;
	if (document.body == null) return;
	if (typeof document.body.offsetWidth !== 'number') return;
	a.deep(t.call(document.createElement('p')), { left: 0, top: 0 });
};
