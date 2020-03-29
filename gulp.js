'use strict';

//dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clea-css');
var uglify = require('gulp-ulgify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


var SCSS_SRC = './scr/Assets/scss/**/*.scss';
var SCSS_DEST = './crc/Assets/css';


gulp.task('compile_scss', function(){
    gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass._logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(changed(SCSS_DEST))
        .pipe(gulp.dest(SCSS_DEST))
});

//detect changes
gulp.task('watch_scss', function () {
    gulp.watch(SCSS_SRC, ['compile_scss']);
})

//run tasks
gulp.task('default', ['watch_scss']);