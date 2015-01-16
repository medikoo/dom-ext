'use strict';

module.exports = function (t, a) {
	var src = t(function (foo, bla) { return foo + bla[0]; }, 'raz', ['marko']);
	a((new Function('return ' + src))(), 'razmarko');
};
