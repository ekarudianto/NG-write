'use strict';

var gulp = require('gulp'),
    clean = require('gulp-clean'),
    webpack = require('webpack-stream'),
    connect = require('gulp-connect'),
    gutil = require('gulp-util'),
    jade = require('gulp-jade'),
    gulpsync = require('gulp-sync')(gulp),
    sass = require('gulp-sass'),
    Server = require('karma').Server,

    LIVERELOAD_PORT = 35730,
    mountFolder = function (connect, dir) {
        return connect.static(require('path').resolve(dir));
    },

    config = {
        app: 'app',
        dist: 'dist'
    };

gulp.task('clean', function () {
    return gulp.src('.tmp', {read: false})
        .pipe(clean());
});

gulp.task('copy', function () {
    return gulp.src([
            config.app + '/index.jade',
            config.app + '/views/**/*.jade'
        ], {base: config.app})
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(function (file) {
            gutil.log(gutil.colors.blue(file.path, 'has created'));
            return '.tmp';
        }));
});

gulp.task('sass', function () {
    return gulp.src(config.app + '/styles/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(function (file) {
            gutil.log(gutil.colors.magenta(file.path, 'has created'));
            return '.tmp/styles';
        }))
});

gulp.task('create-bundle', function () {
    return gulp.src(config.app + '/scripts/index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(function (file) {
            gutil.log(gutil.colors.cyan(file.path, 'has created'));
            return '.tmp';
        }));
});

gulp.task('connect', function () {
    gutil.log(gutil.colors.bgBlue('Starting web server...'));
    return connect.server({
        root: config.app,
        port: 9010,
        livereload: {
            port: LIVERELOAD_PORT
        },
        middleware: function (connect) {
            return [
                mountFolder(connect, '.tmp'),
                mountFolder(connect, config.app)
            ];
        }
    })
});

gulp.task('watch', function () {
    gulp.watch(config.app + '/scripts/**/*.js', gulpsync.sync(['create-bundle', 'reload']));
    gulp.watch(config.app + '/styles/**/*.scss', gulpsync.sync(['sass', 'reload']));
    gulp.watch([
            config.app + '/*.jade',
            config.app + '/views/**/*.jade'
        ], gulpsync.sync(['copy', 'reload']));
});

gulp.task('reload', function () {
    return gulp.src('.tmp')
        .pipe(connect.reload());
});

gulp.task('test:unit', function () {

    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }).start();

});

gulp.task('server', gulpsync.sync(['clean', 'copy', 'create-bundle', 'sass', 'connect', 'watch']));
