'use strict';

module.exports = function (x) {
	return (x && (x.nodeType === 9) && (x.nodeName === '#document')) ||
		false;
};
