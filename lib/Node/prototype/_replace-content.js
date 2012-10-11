'use strict';

var clear  = require('./_clear')
  , extend = require('./_extend');

module.exports = function (child/*, …children*/) {
	return extend.apply(clear.call(this), arguments);
};
