'use strict';

var filters = angular.module('app.filters', []);

/**
 * filter collections
 */

filters.filter('interpolate', require('./interpolate-filter'));

/**
 * exports module
 */

module.exports = filters;
