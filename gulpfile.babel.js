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
    protractor = require('gulp-protractor').protractor,
    webdriver_update = require('gulp-protractor').webdriver_update,

    PORT = {
        app: 9010,
        dist: 9015
    },
    LIVERELOAD_PORT = {
        app: 35730,
        dist: 35731
    },
    mountFolder = function (connect, dir) {
        return connect.static(require('path').resolve(dir));
    },

    config = {
        app: 'app',
        dist: 'dist'
    };

/**
 * used for cleanning up the file projects
 **/

function cleanDir(packg) {
    var dir = (packg === config.app) ? '.tmp' : [config.dist + '/*', config.dist + '/.*'];
    return gulp.src(dir, {read: false})
        .pipe(clean());
}

/**
 * used for copying the views
 **/

function copyViews(packg) {
    var dir = (packg === config.app) ? '.tmp' : config.dist;
    return gulp.src([
            config.app + '/index.jade',
            config.app + '/views/**/*.jade'
        ], {base: config.app})
        .pipe(jade({
            locals: {},
            pretty: true,
            compileDebug: true
        }))
        .pipe(gulp.dest(function (file) {
            gutil.log(gutil.colors.blue(file.path, 'has created'));
            return dir;
        }));
}

/**
 * used for compiling the sass files and copy it to certain destination
 **/

function compileSass(packg) {
    var dir = (packg === config.app) ? '.tmp' : config.dist;
    return gulp.src(config.app + '/styles/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(function (file) {
            gutil.log(gutil.colors.magenta(file.path, 'has created'));
            return dir + '/styles';
        }));
}

/**
 * used for making a bundling using webpack plugin
 **/

function compileBundle(packg) {
    var dir = (packg === config.app) ? '.tmp' : config.dist;
    return gulp.src(config.app + '/scripts/index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(function (file) {
            gutil.log(gutil.colors.cyan(file.path, 'has created'));
            return dir;
        }));
}

/**
 * used for creating a web server
 **/

function createWebServer(packg) {
    var root = (packg === config.app) ? config.app : config.dist;
    var liveReloadPort = (packg === config.app) ? LIVERELOAD_PORT.app : LIVERELOAD_PORT.dist;
    var port = (packg === config.app) ? PORT.app : PORT.dist;
    var middleWareFunction = function (connect, packg) {
        var collections = [];

        if (packg === config.app) {
            collections = [
                mountFolder(connect, '.tmp'),
                mountFolder(connect, config.app)
            ];
        }

        return collections;
    };

    gutil.log(gutil.colors.bgBlue('Starting web server...'));

    return connect.server({
        root: root,
        port: port,
        livereload: {
            port: liveReloadPort
        },
        middleware: function (connect) {
            return middleWareFunction(connect, packg);
        }
    });
}

/**
 * used for refreshing a browser if theres a changes detected by livereload
 **/

function reload(packg) {
    var dir = (packg === config.app) ? '.tmp' : './' + config.dist + '/**';
    return gulp.src(dir)
        .pipe(connect.reload());
}

/**
 * used for implementing a watcher, watching for a changes and do some task accordingly
 **/

function watcher(packg) {
    if (packg === config.app) {

        gulp.watch(config.app + '/scripts/**/*.js', gulpsync.sync(['create-bundle', 'reload']));
        gulp.watch(config.app + '/styles/**/*.scss', gulpsync.sync(['sass', 'reload']));
        gulp.watch([
            config.app + '/*.jade',
            config.app + '/views/**/*.jade'
        ], gulpsync.sync(['copy', 'reload']));

    } else if (packg === config.dist) {

        gulp
            .watch(config.dist + '/**')
            .on('change', function (event) {
                gutil.log(gutil.colors.bgYellow(event.path + ' has changed, reloading...'));
                reload(config.dist);
            });

    }
}

/**
 * Direcotry cleaning tasks
 **/

gulp.task('clean', function () {
    return cleanDir(config.app);
});

gulp.task('clean:dist', function () {
    return cleanDir(config.dist);
});

/**
 * Jade compiler tasks
 **/

gulp.task('copy', function () {
    return copyViews(config.app);
});

gulp.task('copy:dist', function () {
    return copyViews(config.dist);
});

/**
 * Sass compiler tasks
 **/

gulp.task('sass', function () {
    return compileSass(config.app);
});

gulp.task('sass:dist', function () {
    return compileSass(config.dist);
});

/**
 * Module bundling tasks
 **/

gulp.task('create-bundle', function () {
    return compileBundle(config.app);
});

gulp.task('create-bundle:dist', function () {
    return compileBundle(config.dist);
});

/**
 * Web server starter tasks
 **/

gulp.task('connect', function () {
    return createWebServer(config.app);
});

/**
 * Reloader tasks
 */

gulp.task('reload', function () {
    return reload(config.app);
});

gulp.task('reload:dist', function () {
    return reload(config.dist);
});

/**
 * Watcher tasks
 **/

gulp.task('watch', function () {
    return watcher(config.app);
});

/**
 * Webdriver selenium update task
 **/

gulp.task('webdriver_update', webdriver_update);

/**
 * Task for copying server configs such as apache server config, humans.txt, robots.txt, etc
 */

gulp.task('copy-server-configs', function () {

    return gulp.src([
            config.app + '/.htaccess',
            config.app + '/apple-touch-icon.png',
            config.app + '/browserconfig.xml',
            config.app + '/crossdomain.xml',
            config.app + '/favicon.ico',
            config.app + '/humans.txt',
            config.app + '/robots.txt',
            config.app + '/tile.png',
            config.app + '/tile-wide.png'
        ])
        .pipe(gulp.dest(__dirname + '/' + config.dist + '/'));

});

/**
 * Task for copying application vendors to distribution folder
 */

gulp.task('copy-vendors', function () {

    return gulp.src(config.app + '/vendors/**')
        .pipe(gulp.dest(__dirname + '/' + config.dist + '/vendors/'));

});

/**
 * Main tasks
 **/

gulp.task('test:unit', function () {

    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }).start();

});

gulp.task('test:end', ['webdriver_update'], function () {

    gulp.src(__dirname + '/test/e2e/**/*.spec.js')
        .pipe(protractor({
            configFile: 'protractor.conf.js'
        }))

});

gulp.task('default', ['server']);

gulp.task('build', gulpsync.sync(['clean:dist', 'copy:dist', 'create-bundle:dist', 'sass:dist', 'copy-server-configs', 'copy-vendors']));

gulp.task('server', gulpsync.sync(['clean', 'copy', 'create-bundle', 'sass', 'connect', 'watch']));