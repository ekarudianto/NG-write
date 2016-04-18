'use strict';

var services = angular.module('app.services', []);

/**
 * service collections
 */

services.factory('creatorService', require('./creator-service'));

/**
 * exports module
 */

module.exports = services;
