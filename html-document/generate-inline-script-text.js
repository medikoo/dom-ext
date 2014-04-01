'use strict';

var isDate        = require('es5-ext/date/is-date')
  , validFunction = require('es5-ext/function/valid-function')
  , isPlainObject = require('es5-ext/object/is-plain-object')
  , toArray       = require('es5-ext/object/to-array')
  , isRegExp      = require('es5-ext/reg-exp/is-reg-exp')
  , repeat        = require('es5-ext/string/#/repeat')

  , isArray = Array.isArray, map = Array.prototype.map
  , slice = Array.prototype.slice, min = Math.min
  , match = String.prototype.match, stringify = JSON.stringify
  , functionRe = new RegExp('^\\s*function[\\0-\'\\)-\\uffff]*' +
		'\\(([\\0-\\(\\*-\\uffff]*)\\)\\s*\\{([\\0-\\uffff]*)\\}\\s*$')
  , setNest, convertValue;

setNest = function (str, nest, tabWidth) {
	var data, current, tabs = true, add, remove;
	data = str.split('\n');
	current = min.apply(null, data.map(function (str) {
		if (!str) return Infinity;
		return str.match(/^(\t*)/)[1].length;
	}));
	if (current === Infinity) current = 0;

	if (nest > current) {
		if (tabs) add = repeat.call('\t', nest - current);
		else add = repeat.call(' ', (nest - current) * tabWidth);
	} else {
		remove = current - nest;
		if (!tabs) remove *= tabWidth;
	}
	return data.map(function (str) {
		if (!str) return str;
		if (add) return add + str;
		return str.slice(remove);
	}).join('\n');
};

convertValue = function (value, nest) {
	var type = typeof value, data;
	if ((value == null) || (type === 'boolean') || (type === 'number') ||
			isRegExp(value)) {
		return String(value);
	}
	if (type === 'function') {
		data = match.call(value, functionRe);
		return 'function (' + data[1] + ') {' + setNest(data[2], nest) +
			repeat.call('\t', nest) + '}';
	}
	if (isDate(value)) return 'new Date(' + value.getTime() + ')';
	if (isPlainObject(value)) {
		data = '{\n' + repeat.call('\t', nest + 1);
		data += toArray(value, function (value, name) {
			return stringify(name) + ': ' + convertValue(value, nest + 1);
		}).join(',\n' + repeat.call('\t', nest + 1)) + '\n' +
			repeat.call('\t', nest) + '}';
		return data;
	}
	if (isArray(value)) {
		return '[' + value.map(function (value) {
			return convertValue(value, nest + 1);
		}).join(', ') + ']';
	}
	return stringify(String(value));
};

module.exports = function (fn/*, …localVars*/) {
	var data, localVars;
	validFunction(fn);
	localVars = slice.call(arguments, 1);

	data = String(fn).match(functionRe);
	return '(function (' + data[1] + ') { \'use strict\';' +
		setNest(data[2], 0) + '}(' + map.call(localVars, function (value) {
			return convertValue(value, 1);
		}).join(',') +  '));';
};
