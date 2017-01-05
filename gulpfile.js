var gulp            = require('gulp');
var browserSync     = require('browser-sync').create();
var sass            = require('gulp-sass');
var uglify          = require('gulp-uglify');
var uglifycss       = require('gulp-uglifycss');
var concat          = require('gulp-concat');
var rename          = require('gulp-rename');
var sourcemaps      = require('gulp-sourcemaps');
var rev             = require('gulp-rev');
var target         = 'dist/';

gulp.task('serve', ['build'], function () {

    browserSync.init({
        server: target
    });

    gulp.watch('src/scss/**/*.scss', ['css-compile']);
    gulp.watch('src/js/*.js');
    gulp.watch('src/**/*.html').on('change', browserSync.reload);

});

gulp.task('build', ['html', 'css-rev', 'js-rev']);

gulp.task('css-compile', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest(target + 'css'))
    /*.pipe(browserSync.stream())*/;
});

gulp.task('css-minify', ['css-compile'], function() {
  return gulp.src([target + 'css/*.css', '!' + target + 'css/*.min.css'])
    .pipe(uglifycss())
    .pipe(rename(function (path) {
      path.extname = '.min.css';
    }))
    .pipe(gulp.dest(target + 'css'));
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

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest(target))
});

gulp.task('js-rev', ['js-minify'], function () {
  return gulp.src([target + 'js/*.min.js'], {base: target})
    .pipe(rev())
    .pipe(rev.manifest({
      merge: true
    }))
    .pipe(gulp.dest(target));
});

gulp.task('css-rev', ['css-minify'], function () {
  return gulp.src([target + 'css/*.min.css'], {base: target})
    .pipe(rev())
    .pipe(rev.manifest({
      merge: true
    }))
    .pipe(gulp.dest(target));
});



gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
    startPath: '/html'
  });
});

gulp.task('default', ['serve']);
