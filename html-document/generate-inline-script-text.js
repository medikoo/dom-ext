"use strict";

var aFrom         = require("es5-ext/array/from")
  , contains      = require("es5-ext/array/#/contains")
  , isDate        = require("es5-ext/date/is-date")
  , customError   = require("es5-ext/error/custom")
  , isFunction    = require("es5-ext/function/is-function")
  , toTokens      = require("es5-ext/function/#/to-string-tokens")
  , isObject      = require("es5-ext/object/is-object")
  , isPlainObject = require("es5-ext/object/is-plain-object")
  , toArray       = require("es5-ext/object/to-array")
  , isRegExp      = require("es5-ext/reg-exp/is-reg-exp")
  , serialize     = require("es5-ext/object/serialize");

var isArray = Array.isArray
  , slice = Array.prototype.slice
  , stringify = JSON.stringify
  , convertValue;

var keyValueToString = function (value, key) {
	return stringify(key) + ":" + convertValue(value, this);
};

convertValue = function (value, ancestors) {
	if (!isObject(value)) return serialize(value);
	if (isDate(value)) return serialize(value);
	if (isRegExp(value)) return serialize(value);
	if (isFunction(value)) return serialize(value);
	if (contains.call(ancestors, value)) {
		throw customError("Cannot handle recursive structure", "RECURSIVE_STRUCTURE");
	}
	ancestors = aFrom(ancestors);
	ancestors.push(value);
	if (isArray(value)) {
		return (
			"[" +
			value.map(function (item) {
				return convertValue(item, ancestors);
			}) +
			"]"
		);
	}
	if (!isPlainObject(value)) {
		throw customError(value + " cannot be serialized", "UNSERIALIZABLE_VALUE");
	}
	return "{" + toArray(value, keyValueToString, ancestors) + "}";
};

module.exports = function (fn/*, …localVars*/) {
	var data = toTokens.call(fn), localVars = slice.call(arguments, 1);

	return (
		"(function (" +
		data.args +
		") { 'use strict';" +
		data.body +
		"}(" +
		localVars
			.map(function (value) {
				return convertValue(value, []);
			})
			.join(",") +
		"));"
	);
};
