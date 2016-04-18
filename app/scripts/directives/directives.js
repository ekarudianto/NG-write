'use strict';

var directives = angular.module('app.directives', []);

/**
 * directive collections
 */

directives.directive('version', require('./version-directive'));

module.exports = directives;
