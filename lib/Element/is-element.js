'use strict';

module.exports = function (x) {
	return (x && (x.nodeType === 1) && (typeof x.nodeName === 'string')) ||
		false;
};
