'use strict';

var gulp = require('gulp'),
    clean = require('gulp-clean'),
    webpack = require('webpack-stream'),
    connect = require('gulp-connect'),
    gutil = require('gulp-util'),
    jade = require('gulp-jade'),

    LIVERELOAD_PORT = 35730,
    mountFolder = function (connect, dir) {
        return connect.static(require('path').resolve(dir));
    },

    config = {
        app: 'app',
        dist: 'dist'
    };

gulp.task('copy', function () {

    gulp.src([
            './' + config.app + '/*.jade',
            './' + config.app + '/views/*.jade',
            './' + config.app + '/views/**/*.jade'
        ], {
            base: config.app
        })
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(function (file) {
            gutil.log(file.path, 'has created');
            return '.tmp';
        }));

});
