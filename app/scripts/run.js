'use strict';

module.exports = ['$rootScope', function ($rootScope) {

    /**
     * override route change start method
     */

    $rootScope.$on('$routeChangeStart', function (event, next, current) {

    });

    /**
     * override route change success method
     */

    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

    });

    /**
     * override route change error
     */

    $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
        console.error('Error: changing routes!');
    });

}];
