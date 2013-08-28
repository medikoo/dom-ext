'use strict';

module.exports = function (x) {
	return (x && (x.nodeType === 3) && (x.nodeName === '#text')) || false;
};
