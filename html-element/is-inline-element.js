"use strict";

var primitiveSet = require("es5-ext/object/primitive-set")
  , isElement    = require("./is-html-element");

var namesMap = primitiveSet(
	"a",
	"abbr",
	"acronym",
	"b",
	"bdo",
	"big",
	"br",
	"button",
	"cite",
	"code",
	"dfn",
	"em",
	"i",
	"img",
	"input",
	"kbd",
	"label",
	"map",
	"object",
	"q",
	"samp",
	"script",
	"select",
	"small",
	"span",
	"strong",
	"sub",
	"sup",
	"textarea",
	"tt",
	"var"
);

module.exports = function (el) {
	return Boolean(isElement(el) && namesMap[el.nodeName.toLowerCase()]);
};
