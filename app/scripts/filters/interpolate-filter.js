'use strict';

module.exports = ['CONFIG', function (CONFIG) {
    return function (text) {
        return String(text).replace(/\%VERSION\%/mg, CONFIG.version);
    }
}];
