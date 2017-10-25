"use strict";

module.exports = function (value) {
	return (value && value.nodeType === 11 && value.nodeName === "#document-fragment") || false;
};
