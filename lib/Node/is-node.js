'use strict';

module.exports = function (x) {
	return (x && (typeof x.nodeType === "number") &&
		(x.nodeType !== 2) && (typeof x.nodeName === "string")) || false;
};
