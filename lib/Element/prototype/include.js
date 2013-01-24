'use strict';

var include = require('../../Node/prototype/_include')
  , element = require('../valid-element');

module.exports = function () { return include.call(element(this)); };
