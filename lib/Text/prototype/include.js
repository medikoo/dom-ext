'use strict';

var include = require('../../Node/prototype/_include')
  , text    = require('../valid-text');

module.exports = function () { return include.call(text(this)); };
