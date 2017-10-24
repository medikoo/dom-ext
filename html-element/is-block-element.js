"use strict";

var primitiveSet = require("es5-ext/object/primitive-set")
  , isElement    = require("./is-html-element");

var namesMap = primitiveSet("address", "article", "aside", "audio", "blockquote", "canvas", "dd",
	"div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5",
	"h6", "header", "hgroup", "hr", "noscript", "ol", "output", "p", "pre", "section", "table",
	"tfoot", "ul", "video");

module.exports = function (el) {
	return Boolean(isElement(el) && namesMap[el.nodeName.toLowerCase()]);
};
