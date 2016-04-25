exports.config = {

    // Spec patterns are relative to the location of this config.

    specs: ['test/e2e/**/*.spec.js'],

    // Patterns to exclude.

    exclude: [],

    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be resolved against this URL (via url.resolve)

    baseUrl: 'http://127.0.0.1:9010',

    // CSS Selector for the element housing the angular app - this defaults to
    // body, but is necessary if ng-app is on a descendant of <body>.

    rootElement: 'html',

    //Test framework to use

    framework: 'jasmine',

    //Options to be passed to jasmine
    //
    //See https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js
    //for the exact options available

    jasmineNodeOpts: {
        showColors: true
    }
};
