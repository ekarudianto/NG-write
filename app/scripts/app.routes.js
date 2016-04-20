'use strict';

module.exports = [
    '$routeProvider',
    '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/home',
                {
                    controller: 'homeCtrl',
                    templateUrl: 'views/home.html'
                })
            .when('/how',
                {
                    controller: 'howToCtrl',
                    templateUrl: 'views/how.html'
                })
            .otherwise({
                redirectTo: '/home'
            });

    }];
