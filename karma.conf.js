'use strict';

var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        basePath: '.',
        files: [
            'app/scripts/index.js',
            'app/vendors/angular-mocks/angular-mocks.js',
            'test/unit/**/*.spec.js'
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'app/scripts/index.js': ['webpack']
        },
        webpack: {
            resolve: {
                modulesDirectories: [
                    __dirname + '/app/vendors',
                    __dirname + '/node_modules'
                ]
            },
            plugins: [

            /**
             * minify js
             */

                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                }),

            /**
             * resolver plugin, for using bower components
             */

                new webpack.ResolverPlugin(
                    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
                ),

            /**
             * provide plugin, load the component the first time
             */

                new webpack.ProvidePlugin({
                    //'angular': 'exports?window.angular!angular',
                    $: "jquery"
                })
            ]
        },
        port: 8080,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS'],
        plugins: [
            require('karma-webpack'),
            require('karma-phantomjs-launcher'),
            require('karma-jasmine')
        ]
    });
};
