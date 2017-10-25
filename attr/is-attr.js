"use strict";

module.exports = function (value) {
	return (
		(value &&
			typeof value.name === "string" &&
			typeof value.value === "string" &&
			(typeof value.localName === "string" || value.localName === null) &&
			(value.nodeType === 2 || !value.nodeType)) ||
		false
	);
};
