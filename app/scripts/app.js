'use strict';

require('./controllers/controllers');
require('./directives/directives');

var app = angular.module('app', [
    'ngRoute',
    'ngCookies',
    'app.controllers',
    'app.directives'
]);

/**
 * route collections
 */

app.config(require('./app.routes'));

/**
 * constant / value collections
 */

app.constant('CONFIG', require('./app.config'));

/**
 * filter collections
 */

app.filter('interpolate', require('./filters/interpolate-filter'));

/**
 * service collections
 */

app.factory('creatorService', require('./services/creator-service'));

/**
 * run method
 */

app.run(require('./app.run'));

module.exports = app;
