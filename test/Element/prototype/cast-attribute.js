'use strict';

module.exports = function (t, a) {
	var el, fn = function () {}, attr;

	if (typeof document === 'undefined') return;

	el = document.createElement('p');
	t.call(el, 'lorem', 'test');
	t.call(el, 'onclick', fn);
	t.call(el, 'foo', true);
	t.call(el, 'bar', false);
	t.call(el, 'other', null);
	t.call(el, 'another', undefined);

	attr = document.createAttribute('attrvalue');
	attr.value = 'lorem';
	t.call(el, 'attrfalse', attr);

	a(el.childNodes.length, 0, "Children");
	a(el.getAttribute('lorem'), 'test', "Regular");
	a(el.getAttribute('onclick'), 'onclick', "Listener: Attribute");
	a(el.onclick, fn, "Listener: Value");
	a(el.getAttribute('foo'), 'foo', "Boolean (true): Attribute");
	a(el.foo, true, "Boolean (true): Value");
	a(el.hasAttribute('bar'), false, "Boolean (false): Attribute");
	a(el.bar, false, "Boolean (false): Value");
	a(el.hasAttribute('other'), false, "Null:  Undefined");
	a(el.hasAttribute('another'), false, "Undefined: Undefined");
	a(el.getAttribute('attrvalue'), 'lorem', "Attribute object");
	a(el.hasAttribute('attrfalse'), false, "Attribute object: name");

	t.call(el, 'lorem', false);
	t.call(el, 'onclick', null);
	a(el.hasAttribute('class'), false, "Cancelled attribute (false)");
	a(el.hasAttribute('onclick'), false, "Cancelled attribute (null)");
	a(el.onclick, null, "Cancelled function property");
};
