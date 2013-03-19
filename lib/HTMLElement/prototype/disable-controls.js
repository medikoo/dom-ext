'use strict';

var element         = require('../valid-html-element')
  , disableControls = require('../../_HTMLNode/prototype/disable-controls');

module.exports = function () { return disableControls.call(element(this)); };
