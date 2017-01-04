var gulp            = require('gulp');
var browserSync     = require('browser-sync').create();
var sass            = require('gulp-sass');
var uglify          = require('gulp-uglify');
var uglifycss       = require('gulp-uglifycss');
var streamqueue     = require('streamqueue');
var concat          = require('gulp-concat');
var rename          = require('gulp-rename');
var sourcemaps      = require('gulp-sourcemaps');
var rev             = require('gulp-rev');

gulp.task('serve', ['html', 'css-compile', 'css-minify', 'js-compile', 'js-minify'], function () {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch("src/scss/**/*.scss", ['css-minify']);
    gulp.watch("src/js/*.js", ['scripts']);
    gulp.watch("src/**/*.html").on('change', browserSync.reload);

});

/* Acessa o diretório src/scss/, procura por todos os arquivos com a extensão .scss,
 executa o sass do gulp, concatena todos os arquivos e joga p dist  */
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
    .pipe(gulp.dest("dist/css"))
    /*.pipe(browserSync.stream())*/;
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
    // .pipe(browserSync.stream())
);
/* Pega todos os arquivos que estão na pasta js, une eles em apenas um, concatena, renomeia, minifica, direciona para a Dist e atualiza no navegador */
// gulp.task('scripts', function() {
//     return streamqueue({ objectMode: true },
//         gulp.src('src/js/**/*.js')
//     )
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('dist/js'))
//         .pipe(rename('all.min.js'))
//         .pipe(gulp.dest('dist/js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'))
//         .pipe(browserSync.stream())
// });
//
//
// /* Cria a Hash no arquivo, cria o manifest na raiz do projeto (dist) */
// gulp.task('revjavascript', ['scripts'], function () {
//     return gulp.src(['dist/js/*.js'], {base: 'dist'})
//         .pipe(rev())
//         .pipe(gulp.dest('dist'))
//         // .pipe(beautify())
//         .pipe(rev.manifest())
//         .pipe(gulp.dest('dist'));
//     });
//

/* Cuida a pasta que possui o arquivo html, direciona para a Dist e atualiza no navegador */



/* Cuida todos os arquivos da pasta raiz se forem modificados */
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    startPath: "/html"
  });
});

gulp.task('default', ['serve']);
