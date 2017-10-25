"use strict";

var document   = require("../valid-html-document")
  , makeScript = require("../generate-inline-script-text");

module.exports = function (fnIgnored/*, …localVars*/) {
	var script;
	document(this);
	script = this.createElement("script");
	script.appendChild(this.createTextNode(makeScript.apply(null, arguments)));
	return script;
};
