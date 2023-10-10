const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));

function styles () {
    return gulp.src('./src/styles/**/*')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css')); // Corrigido o destino para um diretório "css"
}

function images() {
    return gulp.src('./images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images')); // Corrigido o destino para um diretório "css"
}


exports.default = gulp.parallel(styles,images);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel('styles'))
}
