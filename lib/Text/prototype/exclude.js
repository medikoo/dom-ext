'use strict';

var exclude = require('../../Node/prototype/_exclude')
  , text    = require('../valid-text');

module.exports = function () { return exclude.call(text(this)); };
