'use strict';

module.exports = function (t, a) {
	var form, invoked, event;
	if ((typeof document === 'undefined') || !document.createEvent) return;

	form = document.lastChild.appendChild(document.createElement('form'));

	form.addEventListener('submit', function (e) {
		invoked = e;
	}, false);
	event = t.call(form);
	a(invoked, event, "Submit event");
	form.parentNode.removeChild(form);
};
