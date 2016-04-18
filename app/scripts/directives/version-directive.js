'use strict';

module.exports = ['CONFIG', function (CONFIG) {
    return {
        restrict: 'EA',
        template: 'Version : <strong>{{version}}</strong>',
        controller: ['$scope', function ($scope) {

            $scope.version = CONFIG.version;

        }]
    }
}];
