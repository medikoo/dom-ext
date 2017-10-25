"use strict";

module.exports = function (value) {
	return (value && value.nodeType === 3 && value.nodeName === "#text") || false;
};
