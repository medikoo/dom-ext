"use strict";

var memoize        = require("memoizee/plain")
  , addStyle       = require("./add-style")
  , ensureDocument = require("../valid-html-document");

var className = "reflow-force";

var setStyle = memoize(
	function (document) {
		addStyle.call(document, "body." + className + " { background-color: transparent; }");
	},
	{ normalizer: require("memoizee/normalizers/get-1")() }
);

module.exports = function () {
	var body, cache;
	if (!ensureDocument(this).body) return; // No body, no reflow that can be done
	setStyle(this);
	body = this.body;
	cache = body.style.display;
	body.style.display = "none";
	body.classList.add(className);
	body.style.display = cache;
	setTimeout(function () {
		body.classList.remove(className);
	}, 0);
};
