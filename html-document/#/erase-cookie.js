"use strict";

var setCookie = require("./set-cookie");

module.exports = function (name/*, options*/) {
	setCookie.call(this, name, undefined, arguments[1]);
};
