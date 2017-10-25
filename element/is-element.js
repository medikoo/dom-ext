"use strict";

module.exports = function (value) {
	return (value && value.nodeType === 1 && typeof value.nodeName === "string") || false;
};
