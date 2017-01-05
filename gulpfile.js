var gulp            = require('gulp');
var browserSync     = require('browser-sync').create();
var sass            = require('gulp-sass');
var uglify          = require('gulp-uglify');
var uglifycss       = require('gulp-uglifycss');
var concat          = require('gulp-concat');
var rename          = require('gulp-rename');
var sourcemaps      = require('gulp-sourcemaps');
var rev             = require('gulp-rev');

gulp.task('serve', ['build'], function () {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch("src/scss/**/*.scss", ['css-compile']);
    gulp.watch("src/js/*.js");
    gulp.watch("src/**/*.html").on('change', browserSync.reload);

});

gulp.task('build', ['html', 'rev']);

gulp.task('css-compile', function() {
  return gulp.src("src/scss/**/*.scss")
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest("dist/css"))
    /*.pipe(browserSync.stream())*/;
});

gulp.task('css-minify', ['css-compile'], function() {
  return gulp.src(['dist/css/*.css', '!dist/css/*.min.css'])
    .pipe(uglifycss())
    .pipe(rename(function (path) {
      path.extname = '.min.css';
    }))
    .pipe(gulp.dest("dist/css"));
});

gulp.task('js-compile', function() {
  return gulp.src("src/js/**/*.js")
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('js-minify', ['js-compile'], function() {
  return gulp.src(['dist/js/*.js', '!dist/js/*.min.js'])
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.extname = '.min.js';
    }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('html', () =>
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'))
);

gulp.task('rev', ['css-minify', 'js-minify'], function () {
  return gulp.src(['dist/js/*.min.js','dist/css/*.min.css'], {base: 'dist'})
    .pipe(rev())
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist'));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    startPath: "/html"
  });
});

gulp.task('default', ['serve']);
