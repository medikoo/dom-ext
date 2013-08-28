'use strict';

module.exports = function (x) {
	return (x && (x.nodeType === 11) && (x.nodeName === '#document-fragment')) ||
		false;
};
