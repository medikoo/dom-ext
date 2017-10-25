// Whether provide node can have child nodes

"use strict";

var isNode      = require("../node/is-node")
  , parentTypes = require("es5-ext/object/primitive-set")(1, 9, 11);

module.exports = function (value) {
	return isNode(value) && Boolean(parentTypes[value.nodeType]);
};
