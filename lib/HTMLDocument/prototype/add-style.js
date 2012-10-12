'use strict';

var forEach       = require('es5-ext/lib/Object/for-each')
  , isPlainObject = require('es5-ext/lib/Object/is-plain-object')
  , camelToHyphen = require('es5-ext/lib/String/prototype/camel-to-hyphen')
  , memoize       = require('memoizee/lib/regular')
  , document      = require('../../Document/valid-document')

  , getStyleEl, stringify;

getStyleEl = memoize(function (document) {
	var style = document.getElementsByTagName('*')[0]
		.appendChild(document.createElement('style'));
	style.setAttribute('type', 'text/css');
	return style;
});

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