'use strict';

var toArray = require('es5-ext/array/from');

module.exports = function (t, a) {
	var el, child1, child2, child3, list;
	if (typeof document === 'undefined') return;

	el = document.createElement('p');
	child1 = document.createElement('span');
	child2 = document.createElement('span');
	child3 = document.createElement('span');

	list = [child1, child3, child2];
	t.call(el, list);
	a.deep(toArray(el.childNodes), list, "Init");

	list = [child1, child3, child2];
	t.call(el, list);
	a.deep(toArray(el.childNodes), list, "Reorder");

	list = [child1, child2];
	t.call(el, list);
	a.deep(toArray(el.childNodes), list, "Remove");

	list = [child2, child1, child3];
	t.call(el, list);
	a.deep(toArray(el.childNodes), list, "Add");
};
