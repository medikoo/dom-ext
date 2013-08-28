'use strict';

var memoize  = require('memoizee/lib/regular')
  , addStyle = require('./add-style')
  , document = require('../valid-html-document')

  , setStyle, className = 'reflow-force';

setStyle = memoize(function (document) {
	addStyle.call(document, 'body.' + className +
		' { background-color: transparent; }');
});

module.exports = function () {
	var body, cache;
	setStyle(document(this));
	body = this.body;
	cache = body.style.display;
	body.style.display = 'none';
	body.classList.add(className);
	body.style.display = cache;
	setTimeout(function () { body.classList.remove(className); }, 0);
};
