"use strict";

var customError   = require("es5-ext/error/custom")
  , ensureTimeout = require("timers-ext/valid-timeout")
  , deferred      = require("deferred/deferred")
  , image         = require("../valid-html-image-element");

module.exports = function (/* options */) {
	var def, options, timeout;
	if (image(this).width) return deferred(this);
	options = arguments[0];
	def = deferred();
	this.addEventListener("load", function () {
		def.resolve(this);
	});
	this.addEventListener("abort", function (e) {
		def.reject(customError("Load aborted", "LOAD_ABORTED", { event: e }));
	});
	this.addEventListener("error", function (e) {
		def.reject(customError("Load error", "LOAD_ERROR", { event: e }));
	});
	timeout = ensureTimeout(options && options.timeout);
	if (timeout) {
		setTimeout(function () {
			if (def.resolved) return;
			def.reject(customError("Load timeout", "LOAD_ERROR"));
		}, timeout);
	}
	return def.promise;
};
