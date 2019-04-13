const gulp = require('gulp');
const css = require('gulp-clean-css');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const webserver = require('gulp-webserver');


gulp.task('css', () => {
    return gulp.src('./src/css/sass/*.scss')
        .pipe(sass())
        .pipe(concat('index.css'))
        .pipe(css())
        .pipe(gulp.dest('./src/css'))
})

gulp.task('webserver', function() {
    return gulp.src('./src')
        .pipe(webserver({
            open: true,
            port: 8787,
            livereload: true
        }))
})

gulp.task('watch', function() {
    gulp.watch('./src/css/sass/*.scss', gulp.series('css'));
})

gulp.task('dev', gulp.series('css', 'webserver', 'watch'));