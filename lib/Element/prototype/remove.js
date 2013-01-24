// To be DOM4 standard

'use strict';

var remove  = require('../../Node/prototype/_remove')
  , element = require('../valid-element');

module.exports = function () { remove.call(element(this)); };
