const {src, dest, series} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');


const paths = {
    sass: './src/sass/**/*.scss',
    js: './src/js/**/*.js',
    img: './src/img/*',
    sassDest: './dist/css',
    jsDest:'./dist/js',
    imgDest:'./dist/img'
}

function sassCompiler(done) {
    src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(dest(paths.sassDest));
    done()
}

exports.default = series(sassCompiler)