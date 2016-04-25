'use strict';

/**
 * manual bootstraping
 */

angular.element(document).ready(function () {
    console.log(angular.element(document))
    angular.bootstrap(document.body, ['app']);
});
