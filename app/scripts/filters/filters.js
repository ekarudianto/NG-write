'use strict';

var filters = angular.module('app.filters', []);

/**
 * filter collections
 */

filters.filter('reverse', require('./reverse-filter'));

/**
 * exports module
 */

module.exports = filters;
