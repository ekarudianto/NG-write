'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngCookies'
]);

/**
 * config collections
 */

app.config(require('./route'));

/**
 * constant / value collections
 */

app.constant('CONFIG', require('./config'));

/**
 * controller collections
 */

app.controller('home', require('./controllers/home'));

/**
 * directive collections
 */

app.directive('version', require('./directives/version'));

/**
 * run method
 */

app.run(require('./run'));

module.exports = app;
