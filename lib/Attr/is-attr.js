'use strict';

module.exports = function (x) {
	return (x && (typeof x.name === 'string') && (typeof x.value === 'string') &&
		((typeof x.localName === 'string') || (x.localName === null)) &&
		((x.nodeType === 2) || !x.nodeType)) || false;
};
