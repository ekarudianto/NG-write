'use strict';

module.exports = [
    '$routeProvider',
    '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/home',
                {
                    controller: 'home'
                })
            .otherwise({
                redirectTo: '/home'
            });

    }];
