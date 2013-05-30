// Internal logic inspired on event.simulate of kangax's protolicious
// https://github.com/kangax/protolicious/blob/master/event.simulate.js

'use strict';

var extend  = require('es5-ext/lib/Object/extend')
  , element = require('../valid-html-element')

  , mouseEvents, htmlEvents, defaultOptions;

mouseEvents = { click: true, dblclick: true, mousedown: true, mouseup: true,
	mouseover: true, mousemove: true, mouseout: true };
htmlEvents = { load: true, unload: true, abort: true, error: true, select: true,
	change: true, submit: true, reset: true, focus: true, blur: true,
	resize: true, scroll: true };
defaultOptions = { pointerX: 0, pointerY: 0, button: 0, ctrlKey: false,
	altKey: false, shiftKey: false, metaKey: false, bubbles: true,
	cancelable: true };

module.exports = function (name/*, options */) {
	var type, event, options = extend({}, defaultOptions, Object(arguments[1]));
	element(this);
	if (mouseEvents.hasOwnProperty(name)) type = 'MouseEvents';
	else if (htmlEvents.hasOwnProperty(name)) type = 'HTMLEvents';
	else throw new TypeError('Unsupported event');

	event = document.createEvent(type);
	if (type === 'HTMLEvents') {
		event.initEvent(name, options.bubbles, options.cancelable);
	} else {
		event.initMouseEvent(name, options.bubbles, options.cancelable,
			this.ownerDocument.defaultView, options.button, options.pointerX,
			options.pointerY, options.pointerX, options.pointerY, options.ctrlKey,
			options.altKey, options.shiftKey, options.metaKey, options.button, this);
	}
	this.dispatchEvent(event);
};
