var gulp            = require('gulp');
var browserSync     = require('browser-sync').create();
var sass            = require('gulp-sass');
var uglify          = require('gulp-uglify');
var streamqueue     = require('streamqueue');
var concat          = require('gulp-concat');
var rename          = require('gulp-rename');
var rev             = require('gulp-rev');

gulp.task('serve', ['styles', 'scripts', 'html'], function () {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch("src/scss/**/*.scss", ['styles']);
    gulp.watch("src/js/*.js", ['scripts']);
    gulp.watch("src/**/*.html").on('change', browserSync.reload);

});


gulp.task('scripts', function() {
    return streamqueue({ objectMode: true },
        gulp.src('src/js/**/*.js')
    )
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream())
});


gulp.task('html', () =>
  gulp.src('src/*.html')    
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream())
);

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    startPath: "/html"
  });
});

gulp.task('styles', function() {
    return gulp.src("src/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});



gulp.task('default', ['serve']);
