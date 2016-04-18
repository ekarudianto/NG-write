'use strict';

module.exports = function (config) {
    config.set({
        basePath: '.',
        singleRun: false,
        colors: true,
        files: [
            {pattern: 'app/vendors/**/*.js', included: false},
            {pattern: 'app/scripts/*.js', included: false},
            {pattern: 'app/scripts/**/*.js', included: false},
            {pattern: 'test/specs/controllers/*.js', included: false}
        ],
        port: 8080
    });
};
