const gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    terser = require('gulp-terser'),
    rename = require('gulp-rename'),
    eslint = require('gulp-eslint'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src("./stylesheets/styles.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./build/css"))
        .pipe(cssnano())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest("./build/css"));
});

gulp.task('scripts', function () {
    return gulp.src('./js/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        // .pipe(eslint.failAfterError())
        .pipe(terser())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./build/js'))
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('reload', function (done) {
    browserSync.reload();
    done();
});

gulp.task('watch', function () {
    gulp.watch("./js/*.js", gulp.series('scripts', 'reload'));
    gulp.watch("./stylesheets/*.scss", gulp.series('sass', 'reload'));
    gulp.watch("index.html", gulp.series('reload'));
});



gulp.task('default', gulp.parallel('browser-sync', 'watch', 'sass', 'scripts'));

