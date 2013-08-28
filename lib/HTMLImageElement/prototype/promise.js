'use strict';

var CustomError = require('es5-ext/error/custom')
  , deferred    = require('deferred/lib/deferred')
  , image       = require('../valid-html-image-element');

module.exports = function (/* options */) {
	var def, options, timeout;
	if (image(this).width) return deferred(this);
	options = arguments[0];
	def = deferred();
	this.addEventListener('load', function () { def.resolve(this); });
	this.addEventListener('abort', function (e) {
		def.reject(new CustomError("Load aborted", 'LOAD_ABORTED', { event: e }));
	});
	this.addEventListener('error', function (e) {
		def.reject(new CustomError("Load error", 'LOAD_ERROR', { event: e }));
	});
	timeout = (options && options.timeout) >>> 0;
	if (timeout) {
		setTimeout(function () {
			if (def.resolved) return;
			def.reject(new CustomError("Load timeout", 'LOAD_ERROR'));
		}, timeout);
	}
	return def.promise;
};
