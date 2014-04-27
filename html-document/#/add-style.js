'use strict';

var forEach       = require('es5-ext/object/for-each')
  , isPlainObject = require('es5-ext/object/is-plain-object')
  , camelToHyphen = require('es5-ext/string/#/camel-to-hyphen')
  , memoize       = require('memoizee/plain')
  , document      = require('../valid-html-document')

  , getStyleEl, stringify;

getStyleEl = memoize(function (document) {
	var style = document.head.appendChild(document.createElement('style'));
	style.setAttribute('type', 'text/css');
	return style;
}, { normalizer: require('memoizee/normalizers/get-1')() });

stringify = function (obj) {
	var str = [];
	forEach(obj, function (value, key) {
		str.push(key + ' {');
		forEach(value, function (value, key) {
			str.push('\t' + camelToHyphen.call(key) + ': ' + value + ';');
		});
		str.push('}');
	});
	return str.join('\n');
};

module.exports = function (rules) {
	document(this);
	if (isPlainObject(rules)) (rules = stringify(rules));
	getStyleEl(this).appendChild(this.createTextNode(rules + '\n'));
};
