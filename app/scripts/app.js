'use strict';

require('./controllers/controllers');
require('./directives/directives');
require('./filters/filters');

var app = angular.module('app', [
    'ngRoute',
    'ngCookies',
    'app.controllers',
    'app.directives',
    'app.filters'
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
 * service collections
 */

app.factory('creatorService', require('./services/creator-service'));

/**
 * run method
 */

app.run(require('./app.run'));

module.exports = app;
