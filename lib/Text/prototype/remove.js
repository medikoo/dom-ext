// To be DOM4 standard

'use strict';

var remove = require('../../Node/prototype/_remove')
  , text   = require('../valid-text');

module.exports = function () { remove.call(text(this)); };
