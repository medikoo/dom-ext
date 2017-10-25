"use strict";

module.exports = function (value) {
	return (value && value.nodeType === 9 && value.nodeName === "#document") || false;
};
