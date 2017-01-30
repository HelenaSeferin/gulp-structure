var target          = 'public/';
var gulp            = require('gulp');
var path            = require('path');
var rev             = require('gulp-rev');
var sass            = require('gulp-sass');
var uglify          = require('gulp-uglify');
var concat          = require('gulp-concat');
var rename          = require('gulp-rename');
var uglifycss       = require('gulp-uglifycss');
var sourcemaps      = require('gulp-sourcemaps');
var browserSync     = require('browser-sync').create();

gulp.task('build', ['css-rev', 'js-rev']);

gulp.task('serve', ['build'], function () {

    browserSync.init({
        server: target
    });

    gulp.watch('src/scss/**/*.scss', ['css-compile']);
    gulp.watch('src/js/*.js', ['js-compile']);
    gulp.watch('src/**/*.html').on('change', browserSync.reload);

});

gulp.task('css-compile', function() {
  return gulp.src(['src/scss/**/*.scss','!src/scss/**/_*.scss'])
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest(target + 'css'));
});

gulp.task('css-minify', ['css-compile'], function() {
  return gulp.src([target + 'css/*.css', '!' + target + 'css/*.min.css'])
    .pipe(uglifycss())
    .pipe(rename(function (path) {
      path.extname = '.min.css';
    }))
    .pipe(gulp.dest(target + 'css'));
});

gulp.task('css-rev', ['css-minify'], function () {
  return gulp.src([target + 'css/*.css'], {base: path.join(process.cwd(), 'public')})
    .pipe(rev())
    .pipe(rev.manifest(target+'rev-manifest.json', {
      base: target,
      merge: true,
    }))
    .pipe(gulp.dest(target));
});

gulp.task('js-compile', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest(target + 'js'))
});

gulp.task('js-minify', ['js-compile'], function() {
  return gulp.src([target + 'js/*.js', '!' + target + 'js/*.min.js'])
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.extname = '.min.js';
    }))
    .pipe(gulp.dest(target + 'js'))
});

gulp.task('js-rev', ['js-minify'], function () {
  return gulp.src([target + 'js/*.js'], {base: path.join(process.cwd(), 'public')})
    .pipe(rev())
    .pipe(rev.manifest(target+'rev-manifest.json', {
      base: target,
      merge: true,
    }))
    .pipe(gulp.dest(target));
});

gulp.task('default', ['serve']);
