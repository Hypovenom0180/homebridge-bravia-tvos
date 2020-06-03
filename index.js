/**
 * v3.1
 *
 * @url https://github.com/Hypovenom0180/homebridge-sony-bravia
 * @author Hypovenom0180
 *
**/

'use strict';

module.exports = function (homebridge) {
  let SonyBravia = require('./src/platform.js')(homebridge);
  homebridge.registerPlatform('homebridge-sony-bravia', 'SonyBravia', SonyBravia, true);
};