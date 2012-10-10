'use strict';

module.exports = function (t, a) {
	a(t(null), false, "Null");
	a(t("test"), false, "Primitive");
	a(t({}), false, "Any object");

	if (typeof document !== 'undefined') {
		a(t(document.createDocumentFragment()), true, "DocumentFragment");
		a(t(document.createElement('div')), true, "DocumentFragment");
		a(t(document.createTextNode('content')), true, "Text node");
		a(t(document.createComment('content')), true, "Comment node");
		a(t(document), true, "Document node");
	}
};
