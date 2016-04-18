'use strict';

module.exports = [
    '$routeProvider',
    '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/home',
                {
                    controller: 'home',
                    templateUrl: 'views/home.html'
                })
            .otherwise({
                redirectTo: '/home'
            });

    }];
