'use strict';

var contains = require('es5-ext/lib/String/prototype/contains');

module.exports = function (t, a) {
	a(contains.call(t(function (foo) { return foo; }, 'raz'), 'return foo;'),
		true);
};
