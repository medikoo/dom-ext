"use strict";

var isArguments      = require("es5-ext/function/is-arguments")
  , isPlainObject    = require("es5-ext/object/is-plain-object")
  , normalizeOptions = require("es5-ext/object/normalize-options")
  , extend           = require("../../node/#/_extend")
  , element          = require("../valid-element")
  , castAttributes   = require("./cast-attributes")

  , isArray = Array.isArray, slice = Array.prototype.slice;

module.exports = function (attrs/*, …children*/) {
	var children, args = arguments;

	element(this);
	if ((args.length === 1) && isArguments(args[0])) args = args[0];
	attrs = args[0];
	if (isPlainObject(attrs) && (typeof attrs.toDOM !== "function")) {
		if (attrs.class && this.className) {
			attrs = normalizeOptions(attrs);
			if (isArray(attrs.class)) attrs.class = [this.className].concat(attrs.class);
			else attrs.class = this.className + " " + attrs.class;
		}
		castAttributes.call(this, attrs);
		children = slice.call(args, 1);
	} else {
		children = args;
	}

	return extend.apply(this, children);
};
