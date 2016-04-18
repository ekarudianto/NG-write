'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngCookies'
]);

app.config(require('./route'));
app.constant('CONFIG', require('./config'));
app.controller('home', require('./controllers/home'));
app.directive('version', require('./directives/version'));
app.run(require('./run'));

module.exports = app;
