'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngCookies'
]);

app.controller('home', require('./controllers/home'));
app.config(require('./route'));
app.run(require('./run'));

module.exports = app;
