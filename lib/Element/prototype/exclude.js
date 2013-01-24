'use strict';

var exclude = require('../../Node/prototype/_exclude')
  , element = require('../valid-element');

module.exports = function () { return exclude.call(element(this)); };
