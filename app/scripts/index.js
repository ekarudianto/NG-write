'use strict';

/**
 * load component dependencies
 */

require('angular');
require('angular-route');
require('angular-cookies');

var $ = require('jquery');
window.$ = $;
window.jQuery = $;
require('bootstrap-sass');

/**
 * load main app
 */

require('./app');
