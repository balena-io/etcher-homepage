var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var data = require('gulp-data');
var swig = require('gulp-swig');
var rename = require('gulp-rename');
var savefile = require('gulp-savefile');
var uglify = require("gulp-uglify");
var concat = require('gulp-concat');
var swigOpts = {
  defaults: { cache: false }
}
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

// task
gulp.task('js', function () {
    gulp.src('static/js/lib/*.js') // path to your files
    .pipe(concat('etcher.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('static/js'));
    gulp.src('static/js/main.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('static/js'));
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
    return gulp.src('./template.html')
      .pipe(data(getJsonData))
      .pipe(swig({
          defaults: {
              varControls: [ "<=", "=>" ]
          }
      }))
      .pipe(rename('./index.html'))
      .pipe(savefile());
});

gulp.task('browser-reload', function() {
    browserSync.reload();
});

gulp.task('default',['browser-sync'], function() {
  gulp.watch('static/styles/*.scss',['styles']);
  gulp.watch('static/js/lib/*.js',['js']);
  gulp.watch('./template.html',['render']);
  gulp.watch('./data.json',['render']);
  gulp.watch('static/styles/*.css').on("change", browserSync.reload);
  gulp.watch("./index.html").on("change", browserSync.reload);
});
