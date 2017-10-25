"use strict";

module.exports = function (value) {
	return (
		(value &&
			typeof value.nodeType === "number" &&
			value.nodeType !== 2 &&
			typeof value.nodeName === "string") ||
		false
	);
};
