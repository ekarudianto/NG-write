'use strict';

module.exports = [
    '$scope',
    'creatorService',
    function ($scope,
              creatorService) {

        $scope.creator = creatorService.get();

    }];
