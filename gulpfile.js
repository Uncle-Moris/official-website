const {src, dest, series} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');

function sassCompiler(done) {
    src('./src/sass/**/*.scss')

        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(dest('./dist/css'));
    done()
}



exports.default = series(sassCompiler, )