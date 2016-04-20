'use strict';

var controllers = angular.module('app.controllers', []);

/**
 * controller collections
 */

controllers.controller('homeCtrl', require('./home-controller'));
controllers.controller('howToCtrl', require('./how-to-use-controller'));

/**
 * exports module
 */

module.exports = controllers;
