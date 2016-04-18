'use strict';

var controllers = angular.module('app.controllers', []);

/**
 * controller collections
 */

controllers.controller('homeCtrl', require('./home-controller'));

module.exports = controllers;
