'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngCookies'
]);

/**
 * config collections
 */

app.config(require('./app.routes'));

/**
 * constant / value collections
 */

app.constant('CONFIG', require('./app.config'));

/**
 * controller collections
 */

app.controller('home', require('./controllers/home-controller'));

/**
 * directive collections
 */

app.directive('version', require('./directives/version-directive'));

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
