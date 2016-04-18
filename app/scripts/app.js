'use strict';

require('./controllers/controllers');
require('./directives/directives');
require('./filters/filters');
require('./services/services');

var app = angular.module('app', [
    'ngRoute',
    'ngCookies',
    'app.controllers',
    'app.directives',
    'app.filters',
    'app.services'
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
 * run method
 */

app.run(require('./app.run'));

module.exports = app;
