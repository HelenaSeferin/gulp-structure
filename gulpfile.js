var gulp            = require('gulp');
var browserSync     = require('browser-sync').create();
var sass            = require('gulp-sass');
var uglify          = require('gulp-uglify');
var streamqueue     = require('streamqueue');
var concat          = require('gulp-concat');
var rename          = require('gulp-rename');
var sourcemaps      = require('gulp-sourcemaps');
var rev             = require('gulp-rev');
var revjavascript   = require('gulp-rev');

gulp.task('serve', ['styles', 'scripts', 'html', 'revjavascript'], function () {

    browserSync.init({
        server: "./dist"
    }); 

    gulp.watch("src/scss/**/*.scss", ['styles']);
    gulp.watch("src/js/*.js", ['scripts']);
    gulp.watch("src/**/*.html").on('change', browserSync.reload);

});

/* Cuida a pasta que possui os aquivos de SCSS, modifica para CSS,  direciona para a Dist e atualiza no navegador */
gulp.task('styles', function() {
    return gulp.src("src/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});
 

/* Pega todos os arquivos que estão na pasta js, une eles em apenas um, concatena, renomeia, minifica, direciona para a Dist e atualiza no navegador */
gulp.task('scripts', function() {
    return streamqueue({ objectMode: true },
        gulp.src('src/js/**/*.js')
    )
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream())
});


/* Cria a Hash no arquivo, cria o manifest na raiz do projeto (dist) */
gulp.task('revjavascript', ['scripts'], function () {
    return gulp.src(['dist/js/*.js'], {base: 'dist'})
        .pipe(rev())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('dist'));
    });


/* Cuida a pasta que possui o arquivo html, direciona para a Dist e atualiza no navegador */
gulp.task('html', () =>
  gulp.src('src/*.html')    
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream())
);


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
