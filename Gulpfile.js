var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var data = require('gulp-data');
var swig = require('gulp-swig');
var rename = require('gulp-rename');

var getJsonData = function(file) {
  return require('./data.json');
};

// compile & minifycss
gulp.task('styles', function() {
    gulp.src('static/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifycss())
        .pipe(gulp.dest('static/styles'))
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// make template
gulp.task('render', function() {
    return gulp.src('static/templates/index.html')
      .pipe(data(getJsonData))
      .pipe(swig({defaults: { cache: false }}))
      .pipe(rename('index.html'));
});

gulp.task('browser-reload', function() {
    browserSync.reload();
});

gulp.task('default',['browser-sync'], function() {
  gulp.watch('static/styles/*.scss',['styles']);
  gulp.watch('template.html',['render']);
  gulp.watch('data.json',['render']);
  gulp.watch('static/styles/*.css').on("change", browserSync.reload);
  gulp.watch("index.html").on("change", browserSync.reload);
});
